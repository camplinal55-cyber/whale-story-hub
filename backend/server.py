from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import json
import logging
from pathlib import Path
from pydantic import BaseModel
from typing import Any, Dict

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")

CONTENT_KEY = "active"
SEED_FILE = ROOT_DIR / "content_seed.json"

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


def load_seed() -> Dict[str, Any]:
    with open(SEED_FILE, "r", encoding="utf-8") as f:
        return json.load(f)


class ContentPayload(BaseModel):
    content: Dict[str, Any]


@api_router.get("/")
async def root():
    return {"message": "Free The Whales API"}


@api_router.get("/content")
async def get_content():
    doc = await db.site_content.find_one({"key": CONTENT_KEY})
    if not doc:
        # lazy-seed if missing
        seed = load_seed()
        await db.site_content.update_one(
            {"key": CONTENT_KEY},
            {"$set": {"key": CONTENT_KEY, "content": seed}},
            upsert=True,
        )
        return seed
    return doc.get("content", {})


@api_router.put("/content")
async def put_content(payload: ContentPayload):
    if not payload.content:
        raise HTTPException(status_code=400, detail="content is required")
    await db.site_content.update_one(
        {"key": CONTENT_KEY},
        {"$set": {"key": CONTENT_KEY, "content": payload.content}},
        upsert=True,
    )
    return {"ok": True}


@app.on_event("startup")
async def seed_content():
    existing = await db.site_content.find_one({"key": CONTENT_KEY})
    if not existing:
        try:
            seed = load_seed()
            await db.site_content.insert_one({"key": CONTENT_KEY, "content": seed})
            logger.info("Seeded site_content from content_seed.json")
        except Exception as e:  # noqa
            logger.error(f"Failed to seed content: {e}")


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
