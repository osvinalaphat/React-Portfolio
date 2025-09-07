import React,{useState,useContext, useEffect} from "react"
import styles from "./Boxes.module.css"
import Clubs from "./BoxInfos/Clubs.tsx"
import GPA from "./BoxInfos/GPA.tsx"
import Sports from "./BoxInfos/Sports.tsx"
import ServiceHours from "./BoxInfos/ServiceHours.tsx"
import Projects from "./BoxInfos/Projects.tsx"
import { SubtextBoxesInfo } from "../MainPage.tsx";


type MyComponentProps = {
    setInfoBox: React.Dispatch<React.SetStateAction<boolean>>;
    clubsBoxNumber: string;
    setClubsBoxNumber: React.Dispatch<React.SetStateAction<string>>;
    sportsBoxNumber: string;
    setSportsBoxNumber: React.Dispatch<React.SetStateAction<string>>;
    GPABoxNumber: string;
    setGPABoxNumber: React.Dispatch<React.SetStateAction<string>>;
    serviceHoursBoxNumber: string;
    setServiceHoursBoxNumber: React.Dispatch<React.SetStateAction<string>>;
    projectsBoxNumber: string;
    setProjectsBoxNumber: React.Dispatch<React.SetStateAction<string>>;
    box1Title: string;
    setBox1Title: React.Dispatch<React.SetStateAction<string>>;
    box2Title: string;
    setBox2Title: React.Dispatch<React.SetStateAction<string>>;
    box3Title: string;
    setBox3Title: React.Dispatch<React.SetStateAction<string>>;
    box4Title: string;
    setBox4Title: React.Dispatch<React.SetStateAction<string>>;
    box5Title: string;
    setBox5Title: React.Dispatch<React.SetStateAction<string>>;
    box6Title: string;
    setBox6Title: React.Dispatch<React.SetStateAction<string>>;
    setBox1Text: React.Dispatch<React.SetStateAction<string>>;
    setBox2Text: React.Dispatch<React.SetStateAction<string>>;
    setBox3Text: React.Dispatch<React.SetStateAction<string>>;
    setBox4Text: React.Dispatch<React.SetStateAction<string>>;
    setBox5Text: React.Dispatch<React.SetStateAction<string>>;
    setBox6Text: React.Dispatch<React.SetStateAction<string>>;
};



function InfoBox({ setInfoBox, clubsBoxNumber,setClubsBoxNumber,GPABoxNumber,setGPABoxNumber, serviceHoursBoxNumber,setServiceHoursBoxNumber,projectsBoxNumber, setProjectsBoxNumber, sportsBoxNumber, setSportsBoxNumber, box1Title, setBox1Title, box2Title, setBox2Title, box3Title, setBox3Title, box4Title, setBox4Title, box5Title, setBox5Title, box6Title, setBox6Title, setBox1Text,setBox2Text, setBox3Text, setBox4Text, setBox5Text, setBox6Text, } : MyComponentProps ){

    const [showClubsBox, setClubsBox] = useState(false);
    const [showGPABox, setGPABox] = useState(false);
    const [showSportsBox, setSportsBox] = useState(false);
    const [showServiceHoursBox, setServiceHoursBox] = useState(false);
    const [showProjectsBox, setProjectsBox] = useState(false);

    let {unweightedGPA,setUnweightedGPA,weightedGPA,setWeightedGPA,setBox1Subtext1,setBox2Subtext1,setBox3Subtext1,setBox4Subtext1,setBox5Subtext1,setBox6Subtext1,setBox1Subtext2,setBox2Subtext2,setBox3Subtext2,setBox4Subtext2,setBox5Subtext2,setBox6Subtext2} = useContext(SubtextBoxesInfo);

    const [position, setPosition] = useState({ x: 100, y: 100 });
    const [dragging, setDragging] = useState(false);
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        setDragging(true);
        setOffset({ x: e.clientX - position.x, y: e.clientY - position.y });
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (dragging) {
            setPosition({ x: e.clientX - offset.x, y: e.clientY - offset.y });
        }
    };

    const handleMouseUp = () => {
        setDragging(false);
    };

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    });

    const changeBoxTitle = (boxNumber: string, title: string) => {

        if(boxNumber){
            if(boxNumber =="1"){
                if(box1Title == title){
                    
                }
                else{
                    setBox1Subtext1("")
                    setBox1Subtext2("")                
                    setBox1Text("")
                }
            }
            if(boxNumber =="2"){
                if(box2Title == title){
                    
                }
                else{
                    setBox2Subtext1("")
                    setBox2Subtext2("")                
                    setBox2Text("")
                }
            }
            if(boxNumber =="3"){
                if(box3Title == title){
                    
                }
                else{
                    setBox3Subtext1("")
                    setBox3Subtext2("")                
                    setBox3Text("")
                }
            }
            if(boxNumber =="4"){
                if(box4Title == title){
                    
                }
                else{
                    setBox4Subtext1("")
                    setBox4Subtext2("")                
                    setBox4Text("")
                }
            }
            if(boxNumber =="5"){
                if(box5Title == title){
                    
                }
                else{
                    setBox5Subtext1("")
                    setBox5Subtext2("")                
                    setBox5Text("")
                }
            }
            if(boxNumber =="6"){
                if(box6Title == title){
                    
                }
                else{
                    setBox6Subtext1("")
                    setBox6Subtext2("")                
                    setBox6Text("")
                }
            }
        }

        if (title === "Clubs" && clubsBoxNumber !== "0" && clubsBoxNumber !== boxNumber) {
            return;
        }
        if (title !== "Clubs" && boxNumber === clubsBoxNumber) {
            setClubsBoxNumber("0");
            setClubsBox(false);
        }

        if (title === "GPA" && GPABoxNumber !== "0" && GPABoxNumber !== boxNumber) {
            return;
        }
        if (title !== "GPA" && boxNumber === GPABoxNumber) {
            setGPABoxNumber("0");
            setGPABox(false);
        }

        if (title === "Sports" && sportsBoxNumber !== "0" && sportsBoxNumber !== boxNumber) {
            return;
        }
        if (title !== "Sports" && boxNumber === sportsBoxNumber) {
            setSportsBoxNumber("0");
            setSportsBox(false);
        }

        if (title === "Projects" && projectsBoxNumber !== "0" && projectsBoxNumber !== boxNumber) {
            return;
        }
        if (title !== "Projects" && boxNumber === projectsBoxNumber) {
            setProjectsBoxNumber("0");
            setProjectsBox(false);
        }

        if (title === "Service Hours" && serviceHoursBoxNumber !== "0" && serviceHoursBoxNumber !== boxNumber) {
            return;
        }
        if (title !== "Service Hours" && boxNumber === serviceHoursBoxNumber) {
            setServiceHoursBoxNumber("0");
            setServiceHoursBox(false);
        }


        
        if (boxNumber === "1") setBox1Title(title);
        else if (boxNumber === "2") setBox2Title(title);
        else if (boxNumber === "3") setBox3Title(title);
        else if (boxNumber === "4") setBox4Title(title);
        else if (boxNumber === "5") setBox5Title(title);
        else if (boxNumber === "6") setBox6Title(title);

       
        if (title === "Clubs") {
            setClubsBoxNumber(boxNumber);
            setClubsBox(true);
        }
        if (title==="GPA"){
            setGPABoxNumber(boxNumber);
            setGPABox(true);
        }
        if (title==="Sports"){
            setSportsBoxNumber(boxNumber);
            setSportsBox(true);
        }
        if (title==="Service Hours"){
            setServiceHoursBoxNumber(boxNumber);
            setServiceHoursBox(true);
        }
        if (title==="Projects"){
            setProjectsBoxNumber(boxNumber);
            setProjectsBox(true);
        }
    };



    return(
        <div className={styles.infoPop} style={{
                position: "absolute",
                left: position.x,
                top: position.y,
                cursor: dragging ? "grabbing" : "grab",
            }}>
            <div className={styles.infoHeadbar} onMouseDown={handleMouseDown}>Drag Menu</div>
            <button className={styles.xMark} onClick={() => {setInfoBox(false)}}> X </button>

            <br></br>
            
                <label>Box 1:</label>
                <select className={styles.box1Options} onChange={(event) => changeBoxTitle("1",event.target.value)}>
                            <option>default</option>
                            <option value={"GPA"} disabled={GPABoxNumber !== "0" && GPABoxNumber !== "1"}>gpa</option>
                            <option value={"Service Hours"} disabled={serviceHoursBoxNumber !== "0" && serviceHoursBoxNumber !== "1"}>service hours</option>
                            <option value={"Projects"} disabled={projectsBoxNumber !== "0" && projectsBoxNumber !== "1"}>projects</option>
                            <option value={"Clubs" } disabled={clubsBoxNumber !== "0" && clubsBoxNumber !== "1"}>clubs</option>
                            <option value={"Sports"} disabled={sportsBoxNumber !== "0" && sportsBoxNumber !== "1"}>sports</option>
                </select>
            {clubsBoxNumber == "1" && <button onClick={() => setClubsBox(true)}>Clubs</button>}
            {GPABoxNumber == "1" && <button onClick={() => setGPABox(true)}>GPA</button>}
            {projectsBoxNumber == "1" && <button onClick={() => setProjectsBox(true)}>Projects</button>}
            {serviceHoursBoxNumber == "1" && <button onClick={() => setServiceHoursBox(true)}>Service Hours</button>}
            {sportsBoxNumber== "1" && <button onClick={() => setSportsBox(true)}>Sports</button>}
            
            <br></br>
            <label>Box 2:</label>
            <select className={styles.box1Options} onChange={(event) => changeBoxTitle("2",event.target.value)}>
                        <option>default</option>
                        <option value={"GPA"} disabled={GPABoxNumber !== "0" && GPABoxNumber !== "2"}>gpa</option>
                        <option value={"Service Hours"} disabled={serviceHoursBoxNumber !== "0" && serviceHoursBoxNumber !== "2"}>service hours</option>
                        <option value={"Projects"} disabled={projectsBoxNumber !== "0" && projectsBoxNumber !== "2"}>projects</option>
                        <option value={"Clubs"} disabled={clubsBoxNumber !== "0" && clubsBoxNumber !== "2"}>clubs</option>
                        <option value={"Sports"} disabled={sportsBoxNumber !== "0" && sportsBoxNumber !== "2"}>sports</option>
            </select>
            {clubsBoxNumber == "2" && <button onClick={() => setClubsBox(true)}>Clubs</button>}
            {GPABoxNumber == "2" && <button onClick={() => setGPABox(true)}>GPA</button>}
            {projectsBoxNumber == "2" && <button onClick={() => setProjectsBox(true)}>Projects</button>}
            {serviceHoursBoxNumber == "2" && <button onClick={() => setServiceHoursBox(true)}>Service Hours</button>}
            {sportsBoxNumber== "2" && <button onClick={() => setSportsBox(true)}>Sports</button>}
            <br></br>
            <label>Box 3:</label>
            <select className={styles.box1Options} onChange={(event) => changeBoxTitle("3",event.target.value)}>
                        <option>default</option>
                        <option value={"GPA"} disabled={GPABoxNumber !== "0" && GPABoxNumber !== "3"}>gpa</option>
                        <option value={"Service Hours"} disabled={serviceHoursBoxNumber !== "0" && serviceHoursBoxNumber !== "3"}>service hours</option>
                        <option value={"Projects"} disabled={projectsBoxNumber !== "0" && projectsBoxNumber !== "3"}>projects</option>
                        <option value={"Clubs"} disabled={clubsBoxNumber !== "0" && clubsBoxNumber !== "3"}>clubs</option>
                        <option value={"Sports"} disabled={sportsBoxNumber !== "0" && sportsBoxNumber !== "3"}>sports</option>
            </select>
            {clubsBoxNumber == "3" && <button onClick={() => setClubsBox(true)}>Clubs</button>}
            {GPABoxNumber == "3" && <button onClick={() => setGPABox(true)}>GPA</button>}
            {projectsBoxNumber == "3" && <button onClick={() => setProjectsBox(true)}>Projects</button>}
            {serviceHoursBoxNumber == "3" && <button onClick={() => setServiceHoursBox(true)}>Service Hours</button>}
            {sportsBoxNumber== "3" && <button onClick={() => setSportsBox(true)}>Sports</button>}
            <br></br>
            <label>Box 4:</label>
            <select className={styles.box1Options} onChange={(event) => changeBoxTitle("4",event.target.value)}>
                        <option>default</option>
                        <option value={"GPA"} disabled={GPABoxNumber !== "0" && GPABoxNumber !== "4"}>gpa</option>
                        <option value={"Service Hours"} disabled={serviceHoursBoxNumber !== "0" && serviceHoursBoxNumber !== "4"}>service hours</option>
                        <option value={"Projects"} disabled={projectsBoxNumber !== "0" && projectsBoxNumber !== "4"}>projects</option>
                        <option value={"Clubs"} disabled={clubsBoxNumber !== "0"  && clubsBoxNumber !== "4"}>clubs</option>
                        <option value={"Sports"} disabled={sportsBoxNumber !== "0" && sportsBoxNumber !== "4"}>sports</option>
            </select>
            {clubsBoxNumber == "4" && <button onClick={() => setClubsBox(true)}>Clubs</button>}
            {GPABoxNumber == "4" && <button onClick={() => setGPABox(true)}>GPA</button>}
            {projectsBoxNumber == "4" && <button onClick={() => setProjectsBox(true)}>Projects</button>}
            {serviceHoursBoxNumber == "4" && <button onClick={() => setServiceHoursBox(true)}>Service Hours</button>}
            {sportsBoxNumber== "4" && <button onClick={() => setSportsBox(true)}>Sports</button>}
            <br></br>
            <label>Box 5:</label>
            <select className={styles.box1Options} onChange={(event) => changeBoxTitle("5",event.target.value)}>
                        <option>default</option>
                        <option value={"GPA"} disabled={GPABoxNumber !== "0" && GPABoxNumber !== "5"}>gpa</option>
                        <option value={"Service Hours"} disabled={serviceHoursBoxNumber !== "0" && serviceHoursBoxNumber !== "5"}>service hours</option>
                        <option value={"Projects"}disabled={projectsBoxNumber !== "0" && projectsBoxNumber !== "5"}>projects</option>
                        <option value={"Clubs"} disabled={clubsBoxNumber !== "0" && clubsBoxNumber !== "5"}>clubs</option>
                        <option value={"Sports"} disabled={sportsBoxNumber !== "0" && sportsBoxNumber !== "5"}>sports</option>
            </select>
            {clubsBoxNumber == "5" && <button onClick={() => setClubsBox(true)}>Clubs</button>}
            {GPABoxNumber == "5" && <button onClick={() => setGPABox(true)}>GPA</button>}
            {projectsBoxNumber == "5" && <button onClick={() => setProjectsBox(true)}>Projects</button>}
            {serviceHoursBoxNumber == "5" && <button onClick={() => setServiceHoursBox(true)}>Service Hours</button>}
            {sportsBoxNumber== "5" && <button onClick={() => setSportsBox(true)}>Sports</button>}
            <br></br>
            <label>Box 6:</label>
            <select className={styles.box1Options} onChange={(event) => changeBoxTitle("6",event.target.value)}>
                        <option>default</option>
                        <option value={"GPA"} disabled={GPABoxNumber !== "0" && GPABoxNumber !== "6"}>gpa</option>
                        <option value={"Service Hours"} disabled={serviceHoursBoxNumber !== "0" && serviceHoursBoxNumber !== "6"}>service hours</option>
                        <option value={"Projects"} disabled={projectsBoxNumber !== "0" && projectsBoxNumber !== "6"}>projects</option>
                        <option value={"Clubs"} disabled={clubsBoxNumber !== "0" && clubsBoxNumber !== "6"}>clubs</option>
                        <option value={"Sports"} disabled={sportsBoxNumber !== "0" && sportsBoxNumber !== "6"}>sports</option>
            </select>
            {clubsBoxNumber == "6" && <button onClick={() => setClubsBox(true)}>Clubs</button>}
            {GPABoxNumber == "6" && <button onClick={() => setGPABox(true)}>GPA</button>}
            {projectsBoxNumber == "6" && <button onClick={() => setProjectsBox(true)}>Projects</button>}
            {serviceHoursBoxNumber == "6" && <button onClick={() => setServiceHoursBox(true)}>Service Hours</button>}
            {sportsBoxNumber== "6" && <button onClick={() => setSportsBox(true)}>Sports</button>}


            {showClubsBox && <Clubs clubsBoxNumber={clubsBoxNumber} setClubsBox={setClubsBox}></Clubs>}
            {showGPABox && <GPA GPABoxNumber={GPABoxNumber} setGPABox={setGPABox} ></GPA>}
            {showSportsBox && <Sports sportsBoxNumber={sportsBoxNumber} setSportsBox={setSportsBox} ></Sports>}
            {showServiceHoursBox && <ServiceHours serviceHoursBoxNumber={serviceHoursBoxNumber} setServiceHoursBox={setServiceHoursBox} ></ServiceHours>}
            {showProjectsBox && <Projects projectsBoxNumber={projectsBoxNumber} setProjectsBox={setProjectsBox} ></Projects>}
        </div>
    );
}



export default InfoBox;