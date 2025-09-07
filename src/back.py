from fastapi import FastAPI, Header, Request, HTTPException, Depends
from pydantic import BaseModel
from typing import Optional
from fastapi.middleware.cors import CORSMiddleware
from database import engine, SessionLocal
from sqlalchemy.orm import Session
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy import Column, String, Integer, Boolean, Text
from sqlalchemy.ext.declarative import declarative_base
from firebase_admin import credentials, initialize_app, auth
import firebase_admin






app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5174","http://127.0.0.1:5174","http://localhost:5173"],  # 👈 or replace with your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base = declarative_base()

database = {}

SQLALCHEMY_DATABASE_URL = "sqlite:///./portfolios.db"  # or your DB URL
engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)




class Portfolio(Base):
    __tablename__ = "portfolios"

    uid = Column(String, primary_key=True, index=True)  # Firebase UID
    username = Column(String)
    biog = Column(Text)
    userBackgroundColor = Column(String)
    usernameColor = Column(String)
    userBiogColor = Column(String)

    biogLeft = Column(Integer)
    biogTop = Column(Integer)
    nameLeft = Column(Integer)
    nameTop = Column(Integer)

    box1Color = Column(String)
    box2Color = Column(String)
    box3Color = Column(String)
    box4Color = Column(String)
    box5Color = Column(String)
    box6Color = Column(String)
    box1Color2 = Column(String)
    box2Color2 = Column(String)
    box3Color2 = Column(String)
    box4Color2 = Column(String)
    box5Color2 = Column(String)
    box6Color2 = Column(String)

    box1Width = Column(Integer)
    box2Width = Column(Integer)
    box3Width = Column(Integer)
    box4Width = Column(Integer)
    box5Width = Column(Integer)
    box6Width = Column(Integer)
    
    box1Height = Column(Integer)
    box2Height = Column(Integer)
    box3Height = Column(Integer)
    box4Height = Column(Integer)
    box5Height = Column(Integer)
    box6Height = Column(Integer)

    box1Left = Column(Integer)
    box1Top = Column(Integer)
    box2Left = Column(Integer)
    box2Top = Column(Integer)
    box3Left = Column(Integer)
    box3Top = Column(Integer)
    box4Left = Column(Integer)
    box4Top = Column(Integer)
    box5Left = Column(Integer)
    box5Top = Column(Integer)
    box6Left = Column(Integer)
    box6Top = Column(Integer)
    box6Show = Column(Boolean)

    box1Title = Column(String)
    box2Title = Column(String)
    box3Title = Column(String)
    box4Title = Column(String)
    box5Title = Column(String)
    box6Title = Column(String)

    box1Text = Column(Text)
    box2Text = Column(Text)
    box3Text = Column(Text)
    box4Text = Column(Text)
    box5Text = Column(Text)
    box6Text = Column(Text)

    box1Subtext1 = Column(Text)
    box2Subtext1 = Column(Text)
    box3Subtext1 = Column(Text)
    box4Subtext1 = Column(Text)
    box5Subtext1 = Column(Text)
    box6Subtext1 = Column(Text)

    box1Subtext2 = Column(Text)
    box2Subtext2 = Column(Text)
    box3Subtext2 = Column(Text)
    box4Subtext2 = Column(Text)
    box5Subtext2 = Column(Text)
    box6Subtext2 = Column(Text)

    clubsBoxNumber = Column(String)
    GPABoxNumber = Column(String)
    sportsBoxNumber = Column(String)
    serviceHoursBoxNumber = Column(String)
    projectsBoxNumber = Column(String)

    unweightedGPA = Column(Integer)
    weightedGPA = Column(Integer)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

Base.metadata.create_all(bind=engine)



if not firebase_admin._apps:
    cred = credentials.Certificate("/Users/alvinalaphat/Desktop/Projects/React FastAPI/React-Portfolio/src/firebase_key.json")
    initialize_app(cred)



portfolio_info = {
    "username": "Title",
    "biog": "",
    "userBackgroundColor": "",
    "usernameColor": "",
    "userBiogColor": "",

    "biogLeft": 550,
    "biogTop": 60,
    "nameLeft": 460,
    "nameTop": 0,

    "box1Color": "",
    "box2Color": "",
    "box3Color": "",
    "box4Color": "",
    "box5Color": "",
    "box6Color": "",
    "box1Color2": "",
    "box2Color2": "",
    "box3Color2": "",
    "box4Color2": "",
    "box5Color2": "",
    "box6Color2": "",

    "box1Width": 33,
    "box2Width": 33,
    "box3Width": 33,
    "box4Width": 33,
    "box5Width": 33,
    "box6Width": 33,
    "box1Height": 50,
    "box2Height": 50,
    "box3Height": 50,
    "box4Height": 50,
    "box5Height": 50,
    "box6Height": 50,

    "box1Left": 0, "box1Top": 0,
    "box2Left": 66, "box2Top": 0,
    "box3Left": 0, "box3Top": 50,
    "box4Left": 33, "box4Top": 50,
    "box5Left": 66, "box5Top": 50,
    "box6Left": 0, "box6Top": 0,
    "box6Show": False,

    "box1Title": "Box 1", "box2Title": "Box 2", "box3Title": "Box 3",
    "box4Title": "Box 4", "box5Title": "Box 5", "box6Title": "Box 6",

    "box1Text": "", "box2Text": "", "box3Text": "",
    "box4Text": "", "box5Text": "", "box6Text": "",

    "box1Subtext1": "", "box2Subtext1": "", "box3Subtext1": "",
    "box4Subtext1": "", "box5Subtext1": "", "box6Subtext1": "",

    "box1Subtext2": "", "box2Subtext2": "", "box3Subtext2": "",
    "box4Subtext2": "", "box5Subtext2": "", "box6Subtext2": "",

    "clubsBoxNumber": "0",
    "GPABoxNumber": "0",
    "sportsBoxNumber": "0",
    "serviceHoursBoxNumber": "0",
    "projectsBoxNumber": "0",

    "unweightedGPA": 0,
    "weightedGPA": 0
}




class Portfolio_Update(BaseModel):
    username: Optional[str] = None
    biog: Optional[str] = None
    usernameColor: Optional[str] = None
    userBiogColor: Optional[str] = None
    userBackgroundColor: Optional[str] = None
    biogLeft: Optional[int] = None
    biogTop: Optional[int] = None
    nameLeft: Optional[int] = None
    nameTop: Optional[int] = None
    box1Color: Optional [str] = None
    box2Color: Optional [str] = None
    box3Color: Optional [str] = None
    box4Color: Optional [str] = None
    box5Color: Optional [str] = None
    box6Color: Optional [str] = None
    box1Color2: Optional [str] = None
    box2Color2: Optional [str] = None
    box3Color2: Optional [str] = None
    box4Color2: Optional [str] = None
    box5Color2: Optional [str] = None
    box6Color2: Optional [str] = None
    box1Width: Optional[int] = None
    box2Width: Optional[int] = None
    box3Width: Optional[int] = None
    box4Width: Optional[int] = None
    box5Width: Optional[int] = None
    box6Width: Optional[int] = None
    box1Height: Optional[int] = None
    box2Height: Optional[int] = None
    box3Height: Optional[int] = None
    box4Height: Optional[int] = None
    box5Height: Optional[int] = None
    box6Height: Optional[int] = None
    box1Left: Optional[int] = None
    box1Top: Optional[int] = None
    box2Left: Optional[int] = None
    box2Top: Optional[int] = None
    box3Left: Optional[int] = None
    box3Top: Optional[int] = None
    box4Left: Optional[int] = None
    box4Top: Optional[int] = None
    box5Left: Optional[int] = None
    box5Top: Optional[int] = None
    box6Left: Optional[int] = None
    box6Top: Optional[int] = None
    box6Show: Optional[bool] = None
    box1Title: Optional[str] = None
    box2Title: Optional[str] = None
    box3Title: Optional[str] = None
    box4Title: Optional[str] = None
    box5Title: Optional[str] = None
    box6Title: Optional[str] = None
    box1Text: Optional[str] = None
    box2Text: Optional[str] = None
    box3Text: Optional[str] = None
    box4Text: Optional[str] = None
    box5Text: Optional[str] = None
    box6Text: Optional[str] = None
    box1Subtext1: Optional[str] = None
    box2Subtext1: Optional[str] = None
    box3Subtext1: Optional[str] = None
    box4Subtext1: Optional[str] = None
    box5Subtext1: Optional[str] = None
    box6Subtext1: Optional[str] = None
    box1Subtext2: Optional[str] = None
    box2Subtext2: Optional[str] = None
    box3Subtext2: Optional[str] = None
    box4Subtext2: Optional[str] = None
    box5Subtext2: Optional[str] = None
    box6Subtext2: Optional[str] = None
    clubsBoxNumber: Optional[str] = None
    GPABoxNumber: Optional[str] = None
    sportsBoxNumber: Optional[str] = None
    serviceHoursBoxNumber: Optional[str] = None
    projectsBoxNumber: Optional[str] = None
    unweightedGPA: Optional[float] = None
    weightedGPA: Optional[float] = None

def get_uid_from_token(token: str) -> str:
    try:
        decoded = auth.verify_id_token(token)
        return decoded["uid"]
    except Exception as e:
        raise HTTPException(status_code=401, detail="Invalid token")

@app.get("/")
def front_page_update():
    sending_portfolio_info = {}
    for key,value in portfolio_info.items():
        sending_portfolio_info[key] = value
    return sending_portfolio_info

@app.post("/")
def front_page(new_info : Portfolio_Update):
    for updated_category,new_value in new_info:
        for original_category,old_value in portfolio_info.items():
            if updated_category == original_category:
                portfolio_info[original_category] = new_value
    return portfolio_info

@app.get("/hold-info")
def get_portfolio(authorization: str = Header(None), db: Session = Depends(get_db)):
    if not authorization or not authorization.startswith("Bearer "):
        print("no uid found")
        raise HTTPException(status_code=401, detail="Missing token")

    token = authorization.split(" ")[1]
    uid = get_uid_from_token(token)

    if uid is None:
        print("uid not in database")
        return {}  # or return default template

    existing_portfolio = db.query(Portfolio).filter(Portfolio.uid == uid).first()
    
    if existing_portfolio is None:
        print("uid not in database")
        return {}  # or return a default template

    print(existing_portfolio, flush=True)
    return {
        "uid": existing_portfolio.uid,
        "username": existing_portfolio.username,
        "biog": existing_portfolio.biog,
        "userBackgroundColor": existing_portfolio.userBackgroundColor,
        "usernameColor": existing_portfolio.usernameColor,
        "userBiogColor": existing_portfolio.userBiogColor,

        "biogLeft": existing_portfolio.biogLeft,
        "biogTop": existing_portfolio.biogTop,
        "nameLeft": existing_portfolio.nameLeft,
        "nameTop": existing_portfolio.nameTop,

        "box1Color": existing_portfolio.box1Color,
        "box2Color": existing_portfolio.box2Color,
        "box3Color": existing_portfolio.box3Color,
        "box4Color": existing_portfolio.box4Color,
        "box5Color": existing_portfolio.box5Color,
        "box6Color": existing_portfolio.box6Color,
        "box1Color2": existing_portfolio.box1Color2,
        "box2Color2": existing_portfolio.box2Color2,
        "box3Color2": existing_portfolio.box3Color2,
        "box4Color2": existing_portfolio.box4Color2,
        "box5Color2": existing_portfolio.box5Color2,
        "box6Color2": existing_portfolio.box6Color2,
        
        "box1Width": existing_portfolio.box1Width,
        "box2Width": existing_portfolio.box2Width,
        "box3Width": existing_portfolio.box3Width,
        "box4Width": existing_portfolio.box4Width,
        "box5Width": existing_portfolio.box5Width,
        "box6Width": existing_portfolio.box6Width,
        "box1Height": existing_portfolio.box1Height,
        "box2Height": existing_portfolio.box2Height,
        "box3Height": existing_portfolio.box3Height,
        "box4Height": existing_portfolio.box4Height,
        "box5Height": existing_portfolio.box5Height,
        "box6Height": existing_portfolio.box6Height,

        "box1Left": existing_portfolio.box1Left,
        "box1Top": existing_portfolio.box1Top,
        "box2Left": existing_portfolio.box2Left,
        "box2Top": existing_portfolio.box2Top,
        "box3Left": existing_portfolio.box3Left,
        "box3Top": existing_portfolio.box3Top,
        "box4Left": existing_portfolio.box4Left,
        "box4Top": existing_portfolio.box4Top,
        "box5Left": existing_portfolio.box5Left,
        "box5Top": existing_portfolio.box5Top,
        "box6Left": existing_portfolio.box6Left,
        "box6Top": existing_portfolio.box6Top,
        "box6Show": existing_portfolio.box6Show,

        "box1Title": existing_portfolio.box1Title,
        "box2Title": existing_portfolio.box2Title,
        "box3Title": existing_portfolio.box3Title,
        "box4Title": existing_portfolio.box4Title,
        "box5Title": existing_portfolio.box5Title,
        "box6Title": existing_portfolio.box6Title,

        "box1Text": existing_portfolio.box1Text,
        "box2Text": existing_portfolio.box2Text,
        "box3Text": existing_portfolio.box3Text,
        "box4Text": existing_portfolio.box4Text,
        "box5Text": existing_portfolio.box5Text,
        "box6Text": existing_portfolio.box6Text,

        "box1Subtext1": existing_portfolio.box1Subtext1,
        "box2Subtext1": existing_portfolio.box2Subtext1,
        "box3Subtext1": existing_portfolio.box3Subtext1,
        "box4Subtext1": existing_portfolio.box4Subtext1,
        "box5Subtext1": existing_portfolio.box5Subtext1,
        "box6Subtext1": existing_portfolio.box6Subtext1,

        "box1Subtext2": existing_portfolio.box1Subtext2,
        "box2Subtext2": existing_portfolio.box2Subtext2,
        "box3Subtext2": existing_portfolio.box3Subtext2,
        "box4Subtext2": existing_portfolio.box4Subtext2,
        "box5Subtext2": existing_portfolio.box5Subtext2,
        "box6Subtext2": existing_portfolio.box6Subtext2,

        "clubsBoxNumber": existing_portfolio.clubsBoxNumber,
        "GPABoxNumber": existing_portfolio.GPABoxNumber,
        "sportsBoxNumber": existing_portfolio.sportsBoxNumber,
        "serviceHoursBoxNumber": existing_portfolio.serviceHoursBoxNumber,
        "projectsBoxNumber": existing_portfolio.projectsBoxNumber,

        "unweightedGPA": existing_portfolio.unweightedGPA,
        "weightedGPA": existing_portfolio.weightedGPA
    }


@app.post("/save-portfolio")
async def save_portfolio(request: Request, authorization: str = Header(None), db: Session = Depends(get_db)):
    if not authorization or not authorization.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Missing token")

    token = authorization.split(" ")[1]
    uid = get_uid_from_token(token)

    data = await request.json()

    existing_portfolio = db.query(Portfolio).filter(Portfolio.uid == uid).first()
    print(existing_portfolio, flush=True)

    if existing_portfolio:
        for key, value in data.items():
            if hasattr(existing_portfolio, key) and value is not None:
                setattr(existing_portfolio, key, value)
        db.commit()
        db.refresh(existing_portfolio)
        saved_portfolio = existing_portfolio
    else:
        data["uid"] = uid
        # merge defaults with whatever frontend sent
        merged_data = {**portfolio_info, **data}
        new_portfolio = Portfolio(**{k: v for k, v in merged_data.items() if hasattr(Portfolio, k)})
        db.add(new_portfolio)
        db.commit()
        db.refresh(new_portfolio)
        saved_portfolio = new_portfolio


    print("Saving data for UID:", uid, "| Data:", data, flush=True)
    print(existing_portfolio,flush=True)

    return {"uid": uid, "portfolio": saved_portfolio}
