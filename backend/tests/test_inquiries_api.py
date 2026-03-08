import os
import requests
import pytest


BASE_URL = os.environ["REACT_APP_BACKEND_URL"].rstrip("/")


@pytest.fixture(scope="module")
def api_client():
    session = requests.Session()
    session.headers.update({"Content-Type": "application/json"})
    return session


# Inquiry API tests: creation, retrieval, and validation behavior
class TestInquiriesAPI:
    def test_post_inquiry_creates_record(self, api_client):
        payload = {
            "name": "TEST_QA_User",
            "email": "test.qa.user@example.com",
            "phone": "+91-9999999999",
            "project_type": "Residential",
            "budget": "₹10L - ₹25L",
            "message": "TEST: Need full home interior design consultation",
        }

        response = api_client.post(f"{BASE_URL}/api/inquiries", json=payload, timeout=20)
        assert response.status_code == 200

        data = response.json()
        assert isinstance(data.get("id"), str)
        assert len(data["id"]) > 0
        assert data["name"] == payload["name"]
        assert data["email"] == payload["email"]
        assert data["project_type"] == payload["project_type"]
        assert data["message"] == payload["message"]
        assert "created_at" in data

    def test_get_inquiries_returns_created_record(self, api_client):
        unique_name = "TEST_QA_Persist_Check"
        payload = {
            "name": unique_name,
            "email": "test.persist.qa@example.com",
            "phone": None,
            "project_type": "Commercial",
            "budget": "₹25L - ₹50L",
            "message": "TEST: Persistence verification",
        }

        create_response = api_client.post(f"{BASE_URL}/api/inquiries", json=payload, timeout=20)
        assert create_response.status_code == 200
        created = create_response.json()

        list_response = api_client.get(f"{BASE_URL}/api/inquiries", timeout=20)
        assert list_response.status_code == 200

        items = list_response.json()
        assert isinstance(items, list)
        assert len(items) > 0

        matched = next((item for item in items if item.get("id") == created["id"]), None)
        assert matched is not None
        assert matched["name"] == unique_name
        assert matched["email"] == payload["email"]
        assert matched["project_type"] == payload["project_type"]
        assert matched["message"] == payload["message"]

    def test_post_inquiry_missing_required_fields_returns_422(self, api_client):
        invalid_payload = {
            "name": "",
            "email": "invalid-email",
            "project_type": "",
            "message": "",
        }

        response = api_client.post(f"{BASE_URL}/api/inquiries", json=invalid_payload, timeout=20)
        assert response.status_code == 422

        data = response.json()
        assert "detail" in data
        assert isinstance(data["detail"], list)

    def test_get_inquiries_response_shape(self, api_client):
        response = api_client.get(f"{BASE_URL}/api/inquiries", timeout=20)
        assert response.status_code == 200

        items = response.json()
        assert isinstance(items, list)
        if items:
            sample = items[0]
            assert isinstance(sample.get("id"), str)
            assert isinstance(sample.get("name"), str)
            assert isinstance(sample.get("email"), str)
            assert isinstance(sample.get("project_type"), str)
            assert isinstance(sample.get("message"), str)
            assert "created_at" in sample
