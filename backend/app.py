from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from starlette.middleware.cors import CORSMiddleware
import models
import schemas
import crud
import telegram_service
from database import engine, get_db


models.Base.metadata.create_all(bind=engine)

app = FastAPI()

origins = [
    'http://localhost:3000'
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*']
)


@app.post('/submit_form', response_model=schemas.ContactFormResponse)
async def submit_form(form_data: schemas.ContactFormCreate, db: Session = Depends(get_db)):
    if not form_data.name:
        raise HTTPException(status_code=400, detail='Name is required')

    try:
        db_entry = crud.create_contact_form_entry(db=db, form_data=form_data)

        await telegram_service.send_telegram_notification_aiogram(form_data)

        return db_entry
    except Exception as e:
        raise HTTPException(status_code=500, detail=f'Database error: {e}')


# uvicorn app:app --host 0.0.0.0 --port 5001
