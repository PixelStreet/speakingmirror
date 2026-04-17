"""
Backend API Tests for Speaking Mirror Marketing Agency Website
Tests: Health check, Contact form submission
"""
import pytest
import requests
import os
import uuid

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', 'https://agency-mirror-10.preview.emergentagent.com')

class TestHealthCheck:
    """Health check and root endpoint tests"""
    
    def test_root_endpoint(self):
        """Test root API endpoint returns 200"""
        response = requests.get(f"{BASE_URL}/api/")
        assert response.status_code == 200
        data = response.json()
        assert "message" in data
        assert data["message"] == "Hello World"
        print("✓ Root endpoint working correctly")

    def test_status_endpoint_get(self):
        """Test GET /api/status returns list"""
        response = requests.get(f"{BASE_URL}/api/status")
        assert response.status_code == 200
        data = response.json()
        assert isinstance(data, list)
        print(f"✓ Status GET endpoint working, returned {len(data)} records")

    def test_status_endpoint_post(self):
        """Test POST /api/status creates a status check"""
        test_client_name = f"TEST_client_{uuid.uuid4().hex[:8]}"
        response = requests.post(
            f"{BASE_URL}/api/status",
            json={"client_name": test_client_name}
        )
        assert response.status_code == 200
        data = response.json()
        assert "id" in data
        assert data["client_name"] == test_client_name
        assert "timestamp" in data
        print(f"✓ Status POST endpoint working, created status for {test_client_name}")


class TestContactForm:
    """Contact form API tests"""
    
    def test_contact_submission_success(self):
        """Test POST /api/contact with valid data"""
        test_data = {
            "name": f"TEST_User_{uuid.uuid4().hex[:8]}",
            "email": "test@example.com",
            "phone": "+91 9876543210",
            "company": "Test Company",
            "service": "Social Media Marketing",
            "message": "This is a test message from automated testing."
        }
        response = requests.post(f"{BASE_URL}/api/contact", json=test_data)
        assert response.status_code == 200
        data = response.json()
        
        # Verify response structure
        assert "id" in data
        assert data["name"] == test_data["name"]
        assert data["email"] == test_data["email"]
        assert data["phone"] == test_data["phone"]
        assert data["company"] == test_data["company"]
        assert data["service"] == test_data["service"]
        assert data["message"] == test_data["message"]
        assert "timestamp" in data
        print(f"✓ Contact submission successful, ID: {data['id']}")

    def test_contact_submission_minimal_fields(self):
        """Test POST /api/contact with only required fields"""
        test_data = {
            "name": f"TEST_MinimalUser_{uuid.uuid4().hex[:8]}",
            "email": "minimal@example.com",
            "message": "Minimal test message"
        }
        response = requests.post(f"{BASE_URL}/api/contact", json=test_data)
        assert response.status_code == 200
        data = response.json()
        
        assert data["name"] == test_data["name"]
        assert data["email"] == test_data["email"]
        assert data["message"] == test_data["message"]
        # Optional fields should have default empty values
        assert data["phone"] == ""
        assert data["company"] == ""
        assert data["service"] == ""
        print("✓ Contact submission with minimal fields successful")

    def test_contact_submission_missing_required_fields(self):
        """Test POST /api/contact fails without required fields"""
        # Missing name
        response = requests.post(f"{BASE_URL}/api/contact", json={
            "email": "test@example.com",
            "message": "Test message"
        })
        assert response.status_code == 422  # Validation error
        print("✓ Contact submission correctly rejects missing name")
        
        # Missing email
        response = requests.post(f"{BASE_URL}/api/contact", json={
            "name": "Test User",
            "message": "Test message"
        })
        assert response.status_code == 422
        print("✓ Contact submission correctly rejects missing email")
        
        # Missing message
        response = requests.post(f"{BASE_URL}/api/contact", json={
            "name": "Test User",
            "email": "test@example.com"
        })
        assert response.status_code == 422
        print("✓ Contact submission correctly rejects missing message")


class TestAPIErrorHandling:
    """Test API error handling"""
    
    def test_invalid_endpoint(self):
        """Test 404 for non-existent endpoint"""
        response = requests.get(f"{BASE_URL}/api/nonexistent")
        assert response.status_code == 404
        print("✓ Invalid endpoint returns 404")

    def test_invalid_method(self):
        """Test method not allowed"""
        response = requests.delete(f"{BASE_URL}/api/contact")
        assert response.status_code == 405
        print("✓ Invalid method returns 405")


if __name__ == "__main__":
    pytest.main([__file__, "-v", "--tb=short"])
