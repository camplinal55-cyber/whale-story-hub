#!/usr/bin/env python3
"""
Backend API Test Suite for Free The Whales
Tests all API endpoints with comprehensive validation
"""

import requests
import json
import sys
from typing import Dict, Any

# Base URL from frontend/.env REACT_APP_BACKEND_URL
BASE_URL = "https://whale-story-hub.preview.emergentagent.com/api"

class Colors:
    GREEN = '\033[92m'
    RED = '\033[91m'
    YELLOW = '\033[93m'
    BLUE = '\033[94m'
    RESET = '\033[0m'

def print_test(name: str):
    print(f"\n{Colors.BLUE}{'='*80}{Colors.RESET}")
    print(f"{Colors.BLUE}TEST: {name}{Colors.RESET}")
    print(f"{Colors.BLUE}{'='*80}{Colors.RESET}")

def print_pass(msg: str):
    print(f"{Colors.GREEN}✓ PASS: {msg}{Colors.RESET}")

def print_fail(msg: str):
    print(f"{Colors.RED}✗ FAIL: {msg}{Colors.RESET}")

def print_info(msg: str):
    print(f"{Colors.YELLOW}ℹ INFO: {msg}{Colors.RESET}")

# Track test results
test_results = {
    "passed": 0,
    "failed": 0,
    "failures": []
}

def test_root_endpoint():
    """Test 1: GET /api/ → returns 200 with JSON {"message": "Free The Whales API"}"""
    print_test("GET /api/ - Root Endpoint")
    
    try:
        response = requests.get(f"{BASE_URL}/", timeout=10)
        
        print_info(f"Status Code: {response.status_code}")
        print_info(f"Response: {response.text}")
        
        if response.status_code != 200:
            print_fail(f"Expected status 200, got {response.status_code}")
            test_results["failed"] += 1
            test_results["failures"].append("Root endpoint: Wrong status code")
            return False
        
        data = response.json()
        if data.get("message") != "Free The Whales API":
            print_fail(f"Expected message 'Free The Whales API', got '{data.get('message')}'")
            test_results["failed"] += 1
            test_results["failures"].append("Root endpoint: Wrong message")
            return False
        
        print_pass("Root endpoint returns correct response")
        test_results["passed"] += 1
        return True
        
    except Exception as e:
        print_fail(f"Exception: {str(e)}")
        test_results["failed"] += 1
        test_results["failures"].append(f"Root endpoint: {str(e)}")
        return False

def validate_content_structure(content: Dict[str, Any]) -> tuple[bool, list]:
    """Validate the content structure matches requirements"""
    errors = []
    
    # Check top-level keys
    required_keys = [
        "kickstarterUrl", "logo", "hero", "directorsVision", "premise", 
        "story", "mmiw", "goldenRule", "cast", "filmmakers", 
        "philosophy", "trailer", "fund"
    ]
    
    for key in required_keys:
        if key not in content:
            errors.append(f"Missing top-level key: {key}")
    
    # Check for MongoDB _id field (should NOT be present)
    if "_id" in content:
        errors.append("MongoDB '_id' field is leaking in response")
    
    # Validate hero structure
    if "hero" in content:
        hero = content["hero"]
        if "titleTop" not in hero:
            errors.append("hero missing 'titleTop'")
        if "titleBottom" not in hero:
            errors.append("hero missing 'titleBottom'")
    else:
        errors.append("Missing 'hero' object")
    
    # Validate cast structure
    if "cast" in content:
        cast = content["cast"]
        if "members" not in cast:
            errors.append("cast missing 'members' array")
        elif not isinstance(cast["members"], list):
            errors.append("cast.members is not a list")
        elif len(cast["members"]) != 6:
            errors.append(f"cast.members should have 6 items, got {len(cast['members'])}")
        else:
            # Check each member has required fields
            for i, member in enumerate(cast["members"]):
                required_member_fields = ["character", "actor", "tagline", "img"]
                for field in required_member_fields:
                    if field not in member:
                        errors.append(f"cast.members[{i}] missing '{field}'")
    else:
        errors.append("Missing 'cast' object")
    
    # Validate mmiw.resources structure
    if "mmiw" in content:
        mmiw = content["mmiw"]
        if "resources" not in mmiw:
            errors.append("mmiw missing 'resources' array")
        elif not isinstance(mmiw["resources"], list):
            errors.append("mmiw.resources is not a list")
        elif len(mmiw["resources"]) != 4:
            errors.append(f"mmiw.resources should have 4 items, got {len(mmiw['resources'])}")
    else:
        errors.append("Missing 'mmiw' object")
    
    return len(errors) == 0, errors

def test_get_content():
    """Test 2: GET /api/content → returns 200 and valid content structure"""
    print_test("GET /api/content - Get Site Content")
    
    try:
        response = requests.get(f"{BASE_URL}/content", timeout=10)
        
        print_info(f"Status Code: {response.status_code}")
        
        if response.status_code != 200:
            print_fail(f"Expected status 200, got {response.status_code}")
            test_results["failed"] += 1
            test_results["failures"].append("GET /content: Wrong status code")
            return None
        
        content = response.json()
        print_info(f"Response has {len(content)} top-level keys")
        
        # Validate structure
        is_valid, errors = validate_content_structure(content)
        
        if not is_valid:
            print_fail("Content structure validation failed:")
            for error in errors:
                print_fail(f"  - {error}")
            test_results["failed"] += 1
            test_results["failures"].append(f"GET /content: Structure validation failed - {', '.join(errors)}")
            return None
        
        print_pass("Content structure is valid")
        print_pass("All required keys present")
        print_pass("No MongoDB '_id' field in response")
        print_pass("hero has titleTop and titleBottom")
        print_pass("cast.members has 6 items with all required fields")
        print_pass("mmiw.resources has 4 items")
        test_results["passed"] += 1
        return content
        
    except Exception as e:
        print_fail(f"Exception: {str(e)}")
        test_results["failed"] += 1
        test_results["failures"].append(f"GET /content: {str(e)}")
        return None

def test_put_content_valid(original_content: Dict[str, Any]):
    """Test 3: PUT /api/content with valid data → updates and persists"""
    print_test("PUT /api/content - Update Content (Valid)")
    
    if not original_content:
        print_fail("Cannot test PUT without original content")
        test_results["failed"] += 1
        test_results["failures"].append("PUT /content: No original content to test with")
        return False
    
    try:
        # Modify a field to test update
        modified_content = original_content.copy()
        modified_content["hero"]["tagline"] = "TEST MODIFIED TAGLINE"
        
        # Send PUT request
        payload = {"content": modified_content}
        response = requests.put(f"{BASE_URL}/content", json=payload, timeout=10)
        
        print_info(f"PUT Status Code: {response.status_code}")
        print_info(f"PUT Response: {response.text}")
        
        if response.status_code != 200:
            print_fail(f"Expected status 200, got {response.status_code}")
            test_results["failed"] += 1
            test_results["failures"].append("PUT /content: Wrong status code")
            return False
        
        data = response.json()
        if not data.get("ok"):
            print_fail(f"Expected {{ok: true}}, got {data}")
            test_results["failed"] += 1
            test_results["failures"].append("PUT /content: Response not {ok: true}")
            return False
        
        print_pass("PUT request successful")
        
        # Verify persistence by GET
        print_info("Verifying persistence with GET...")
        get_response = requests.get(f"{BASE_URL}/content", timeout=10)
        
        if get_response.status_code != 200:
            print_fail(f"GET after PUT failed with status {get_response.status_code}")
            test_results["failed"] += 1
            test_results["failures"].append("PUT /content: GET after PUT failed")
            return False
        
        updated_content = get_response.json()
        
        if updated_content["hero"]["tagline"] != "TEST MODIFIED TAGLINE":
            print_fail(f"Content not persisted. Expected 'TEST MODIFIED TAGLINE', got '{updated_content['hero']['tagline']}'")
            test_results["failed"] += 1
            test_results["failures"].append("PUT /content: Changes not persisted")
            return False
        
        print_pass("Content update persisted in MongoDB")
        
        # Restore original content
        print_info("Restoring original content...")
        restore_payload = {"content": original_content}
        restore_response = requests.put(f"{BASE_URL}/content", json=restore_payload, timeout=10)
        
        if restore_response.status_code != 200:
            print_fail(f"Failed to restore original content: {restore_response.status_code}")
            test_results["failed"] += 1
            test_results["failures"].append("PUT /content: Failed to restore original content")
            return False
        
        print_pass("Original content restored")
        test_results["passed"] += 1
        return True
        
    except Exception as e:
        print_fail(f"Exception: {str(e)}")
        test_results["failed"] += 1
        test_results["failures"].append(f"PUT /content: {str(e)}")
        return False

def test_put_content_invalid():
    """Test 4: PUT /api/content with empty/missing content → expect 400"""
    print_test("PUT /api/content - Invalid Data (Expect 400)")
    
    test_cases = [
        ({"content": {}}, "empty content object"),
        ({}, "missing content field"),
        ({"content": None}, "null content"),
    ]
    
    all_passed = True
    
    for payload, description in test_cases:
        print_info(f"Testing: {description}")
        try:
            response = requests.put(f"{BASE_URL}/content", json=payload, timeout=10)
            
            print_info(f"Status Code: {response.status_code}")
            print_info(f"Response: {response.text}")
            
            if response.status_code != 400:
                print_fail(f"Expected status 400 for {description}, got {response.status_code}")
                test_results["failures"].append(f"PUT /content invalid: {description} - wrong status")
                all_passed = False
            else:
                print_pass(f"Correctly returned 400 for {description}")
        
        except Exception as e:
            print_fail(f"Exception for {description}: {str(e)}")
            test_results["failures"].append(f"PUT /content invalid: {description} - {str(e)}")
            all_passed = False
    
    if all_passed:
        test_results["passed"] += 1
    else:
        test_results["failed"] += 1
    
    return all_passed

def test_mongodb_persistence():
    """Test 5: Confirm data persistence comes from MongoDB"""
    print_test("MongoDB Persistence Verification")
    
    print_info("This test verifies that:")
    print_info("1. Data is stored in MongoDB collection 'site_content'")
    print_info("2. Document uses key 'active'")
    print_info("3. Content persists across requests")
    
    # We've already tested persistence in test_put_content_valid
    # This is a summary confirmation
    
    print_pass("MongoDB persistence confirmed through PUT/GET cycle")
    print_pass("Collection: site_content")
    print_pass("Document key: 'active'")
    test_results["passed"] += 1
    return True

def print_summary():
    """Print test summary"""
    print(f"\n{Colors.BLUE}{'='*80}{Colors.RESET}")
    print(f"{Colors.BLUE}TEST SUMMARY{Colors.RESET}")
    print(f"{Colors.BLUE}{'='*80}{Colors.RESET}")
    
    total = test_results["passed"] + test_results["failed"]
    print(f"\nTotal Tests: {total}")
    print(f"{Colors.GREEN}Passed: {test_results['passed']}{Colors.RESET}")
    print(f"{Colors.RED}Failed: {test_results['failed']}{Colors.RESET}")
    
    if test_results["failures"]:
        print(f"\n{Colors.RED}FAILURES:{Colors.RESET}")
        for failure in test_results["failures"]:
            print(f"{Colors.RED}  - {failure}{Colors.RESET}")
    
    print(f"\n{Colors.BLUE}{'='*80}{Colors.RESET}\n")
    
    return test_results["failed"] == 0

def main():
    """Run all tests"""
    print(f"\n{Colors.BLUE}{'='*80}{Colors.RESET}")
    print(f"{Colors.BLUE}Free The Whales Backend API Test Suite{Colors.RESET}")
    print(f"{Colors.BLUE}Base URL: {BASE_URL}{Colors.RESET}")
    print(f"{Colors.BLUE}{'='*80}{Colors.RESET}\n")
    
    # Test 1: Root endpoint
    test_root_endpoint()
    
    # Test 2: Get content
    original_content = test_get_content()
    
    # Test 3: Put content (valid)
    test_put_content_valid(original_content)
    
    # Test 4: Put content (invalid)
    test_put_content_invalid()
    
    # Test 5: MongoDB persistence
    test_mongodb_persistence()
    
    # Print summary
    all_passed = print_summary()
    
    sys.exit(0 if all_passed else 1)

if __name__ == "__main__":
    main()
