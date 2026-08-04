# Free The Whales — Backend Contracts

## Goal
Serve all site copy/cast/resources from MongoDB so content is editable without redeploy.
Frontend fetches content on load; falls back to local `mock.js` if the API fails.

## Data
Single content document in collection `site_content` (key: `active`), matching the
exact shape of `frontend/src/mock.js` `content` object. Seeded on startup from
`backend/content_seed.json` if the collection is empty.

## API (all prefixed with /api)
- `GET /api/content` → returns the active content document (no Mongo `_id`).
  Response shape === `mock.js` content object.
- `PUT /api/content` → (optional admin) replaces the active content document. Body = full content object.
- `GET /api/` → health hello.

## Frontend integration
- `App.js`: on mount, `axios.get(${BACKEND_URL}/api/content)`; on success use response,
  on failure use imported `mock` content. Show nothing broken either way.
- No other components change (they receive `content` via props).

## Mocked / External
- Images: served from reference public storage URLs (kept as-is).
- Trailer YouTube id: EMPTY (MOCKED) — poster + "Trailer coming soon" until real id provided.
- Kickstarter + MMIW resource links: external real URLs.
- No auth, no payments, no contact form (per user).
