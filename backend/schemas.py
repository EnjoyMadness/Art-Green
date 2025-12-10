from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime


class ContactFormCreate(BaseModel):
    name: str
    phone: str
    email: Optional[EmailStr] = None
    message: Optional[str] = None

    class Config:
        from_attributes = True


class ContactFormResponse(ContactFormCreate):
    id: int
    create_at: datetime
