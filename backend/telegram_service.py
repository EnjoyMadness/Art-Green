from aiogram import Bot
import schemas

from config import TELEGRAM_BOT_TOKEN, TELEGRAM_ADMIN_CHAT_ID

try:
    if TELEGRAM_BOT_TOKEN and TELEGRAM_ADMIN_CHAT_ID:
        bot = Bot(token=TELEGRAM_BOT_TOKEN)
        CHAT_ID = int(TELEGRAM_ADMIN_CHAT_ID)
    else:
        bot = None
        CHAT_ID = None
except Exception as e:
    bot = None
    CHAT_ID = None
    print(f'Ошибка инициализации бота: {e}')


def format_telegram_message(data: schemas.ContactFormCreate):
    message = '🚨 <b>НОВАЯ ЗАЯВКА</b>\n'
    message += '--------------------------------------\n'
    message += f'👤 <b>Имя:</b> {data.name}\n'

    if data.phone:
        clean_phone = data.phone.replace(' ', '').replace('-', '').replace('(', '').replace(')', '')
        message += f'📞 <b>Телефон:</b> <a href="tel:{clean_phone}">{clean_phone}</a>\n'

    if data.email:
        message += f"📧 <b>Email:</b> {data.email}\n"

    if data.message:
        message += f"\n💬 <b>Сообщение:</b>\n{data.message}"

    return message


async def send_telegram_notification_aiogram(form_data: schemas.ContactFormCreate):
    if bot is None or CHAT_ID is None:
        print("Telegram бот не инициализирован. Уведомление не отправлено.")
        return

    message_text = format_telegram_message(form_data)

    try:
        await bot.send_message(
            chat_id=CHAT_ID,
            text=message_text,
            parse_mode="HTML",
            disable_web_page_preview=True
        )

    except Exception as e:
        print(f"Ошибка отправки сообщения через aiogram: {e}")
