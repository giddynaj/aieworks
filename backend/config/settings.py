import os
from dotenv import load_dotenv

load_dotenv()

class Settings:
    GEMINI_API_KEY = "AIzaSyDoZ7QAmDkTl3OR45F6tcPvMbmz-U6uqbU"
    APP_NAME = "AI Chat Assistant"
    DEBUG = True
    HOST = "0.0.0.0"
    PORT = 8000
    CORS_ORIGINS = ["http://localhost:3000"]

settings = Settings()
