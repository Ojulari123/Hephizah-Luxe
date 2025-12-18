from sqlalchemy import create_engine, Column, Integer, String, Text, ForeignKey, Boolean, Numeric, Date, TIMESTAMP, func, DECIMAL, Enum, text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, relationship
from datetime import datetime
import os
from dotenv import load_dotenv

load_dotenv()

HL_USER=os.getenv("HLUSER")
HL_PASSWORD=os.getenv("HLPASSWORD")
HL_DB=os.getenv("HLDB")
HL_HOST=os.getenv("HLHOST")
HL_PORT = os.getenv("HLPORT")

db_url = f"postgresql://HL_Admin:npg_0BfEgMyCan1I@ep-dark-shape-a8a82jhy-pooler.eastus2.azure.neon.tech/Hephzibah?sslmode=require&channel_binding=require"
engine = create_engine(db_url)
Local_Session = sessionmaker(bind=engine)
Base = declarative_base()


