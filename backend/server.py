from fastapi import FastAPI, APIRouter, BackgroundTasks
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
import os
import logging
import html
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]
sendgrid_api_key = os.environ['SENDGRID_API_KEY']
sender_email = os.environ['SENDER_EMAIL']
inquiry_notification_to = os.environ['INQUIRY_NOTIFICATION_TO']

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str


class InquiryBase(BaseModel):
    name: str
    email: EmailStr
    phone: str | None = None
    project_type: str
    budget: str | None = None
    message: str


class InquiryCreate(InquiryBase):
    pass


class Inquiry(InquiryBase):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


def send_inquiry_notification_email(inquiry_data: dict):
    escaped_name = html.escape(inquiry_data.get("name", ""))
    escaped_email = html.escape(inquiry_data.get("email", ""))
    escaped_phone = html.escape(inquiry_data.get("phone") or "Not provided")
    escaped_project_type = html.escape(inquiry_data.get("project_type", ""))
    escaped_budget = html.escape(inquiry_data.get("budget") or "Not provided")
    escaped_message = html.escape(inquiry_data.get("message", ""))
    escaped_created_at = html.escape(inquiry_data.get("created_at", ""))
    escaped_inquiry_id = html.escape(inquiry_data.get("id", ""))

    email_subject = f"New Inquiry Received - {inquiry_data.get('name', 'Client')}"
    html_content = f"""
    <html>
      <body style=\"font-family: Arial, sans-serif; line-height: 1.5;\">
        <h2 style=\"margin-bottom: 16px;\">New Website Inquiry</h2>
        <p><strong>Name:</strong> {escaped_name}</p>
        <p><strong>Email:</strong> {escaped_email}</p>
        <p><strong>Phone:</strong> {escaped_phone}</p>
        <p><strong>Project Type:</strong> {escaped_project_type}</p>
        <p><strong>Budget:</strong> {escaped_budget}</p>
        <p><strong>Inquiry ID:</strong> {escaped_inquiry_id}</p>
        <p><strong>Created At:</strong> {escaped_created_at}</p>
        <hr style=\"margin: 20px 0;\" />
        <p><strong>Message:</strong></p>
        <p>{escaped_message}</p>
      </body>
    </html>
    """

    try:
        mail = Mail(
            from_email=sender_email,
            to_emails=inquiry_notification_to,
            subject=email_subject,
            html_content=html_content,
        )
        sg = SendGridAPIClient(sendgrid_api_key)
        response = sg.send(mail)
        logger.info(
            "SendGrid notification sent for inquiry %s with status %s",
            inquiry_data.get("id"),
            response.status_code,
        )
    except Exception:
        logger.exception("SendGrid notification failed for inquiry %s", inquiry_data.get("id"))

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks


@api_router.post("/inquiries", response_model=Inquiry)
async def create_inquiry(payload: InquiryCreate, background_tasks: BackgroundTasks):
    inquiry_obj = Inquiry(**payload.model_dump())

    doc = inquiry_obj.model_dump()
    doc["created_at"] = doc["created_at"].isoformat()

    _ = await db.inquiries.insert_one(doc)
    background_tasks.add_task(send_inquiry_notification_email, doc)
    return inquiry_obj


@api_router.get("/inquiries", response_model=List[Inquiry])
async def get_inquiries():
    inquiries = await db.inquiries.find({}, {"_id": 0}).sort("created_at", -1).to_list(200)

    for inquiry in inquiries:
        if isinstance(inquiry.get("created_at"), str):
            inquiry["created_at"] = datetime.fromisoformat(inquiry["created_at"])

    return inquiries

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()