from sqlalchemy.orm import Session
import models
import schemas


def create_contact_form_entry(db: Session, form_data: schemas.ContactFormCreate):
    db_entry = models.ContactForm(
        name=form_data.name,
        phone=form_data.phone,
        email=form_data.email,
        message=form_data.message
    )
    db.add(db_entry)
    db.commit()

    db.refresh(db_entry)

    return db_entry
