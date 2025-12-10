from sqlalchemy import Column, Integer, String, Text, DateTime, func
from database import Base


class ContactForm(Base):
    __tablename__ = 'contact_forms'

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), index=True, nullable=False)
    phone = Column(String(20), nullable=False)
    email = Column(String(100), index=True, nullable=True)
    message = Column(Text, nullable=True)
    create_at = Column(DateTime, default=func.now())
