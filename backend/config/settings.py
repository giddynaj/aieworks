import os
from dotenv import load_dotenv

load_dotenv()

class Settings:
    GEMINI_API_KEY="AIzaSyDXG2jFqO0LX8qPpdC2NwV8rE0SOFCg5mY"
    APP_NAME = "AI Chat Assistant"
    DEBUG = True
    HOST = "0.0.0.0"
    PORT = 8000
    CORS_ORIGINS = ["http://localhost:3000"]

settings = Settings()
