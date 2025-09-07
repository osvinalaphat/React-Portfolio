import styles from "./BoxInfos.module.css";
import React, { useRef, useContext, useState, useEffect } from "react";
import { ParentPassedText } from "../../MainPage";

type ProjectsBoxProps = {
    projectsBoxNumber: string;
    setProjectsBox: React.Dispatch<React.SetStateAction<boolean>>;
};

function Projects({ projectsBoxNumber, setProjectsBox }: ProjectsBoxProps) {
    const { setBox1Text, setBox2Text, setBox3Text, setBox4Text, setBox5Text, setBox6Text } = useContext(ParentPassedText);
    const projectName = useRef(null);
    const projectURL = useRef(null);
    const projectDescription = useRef(null);
    const [projectEntries, setProjectEntries] = useState<string[]>([]);

    // --- Draggable ---
    const [position,setPosition]=useState({x:100,y:100});
    const [dragging,setDragging]=useState(false);
    const [offset,setOffset]=useState({x:0,y:0});

    const handleMouseDown=(e:React.MouseEvent<HTMLDivElement>)=>{
        setDragging(true);
        setOffset({x:e.clientX-position.x, y:e.clientY-position.y});
    }
    const handleMouseMove=(e:MouseEvent)=>{if(dragging) setPosition({x:e.clientX-offset.x,y:e.clientY-offset.y});}
    const handleMouseUp=()=>setDragging(false);

    useEffect(()=>{
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
        return()=>{
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        }
    });

    const handleAddProject = () => {
        const name = projectName.current.value.trim();
        const url = projectURL.current.value.trim();
        const desc = projectDescription.current.value.trim();
        if(!name || !url || !desc) return;
        const formattedEntry = `${name} — ${desc}\n${url}`;
        setProjectEntries(prev => [...prev, formattedEntry]);
        projectName.current.value=""; projectURL.current.value=""; projectDescription.current.value="";
    }

    const handleFinalSubmit=()=>{
        const fullText = projectEntries.join("\n\n");
        switch(projectsBoxNumber){
            case "1": setBox1Text(prev=>prev? prev+"\n\n"+fullText:fullText); break;
            case "2": setBox2Text(prev=>prev? prev+"\n\n"+fullText:fullText); break;
            case "3": setBox3Text(prev=>prev? prev+"\n\n"+fullText:fullText); break;
            case "4": setBox4Text(prev=>prev? prev+"\n\n"+fullText:fullText); break;
            case "5": setBox5Text(prev=>prev? prev+"\n\n"+fullText:fullText); break;
            case "6": setBox6Text(prev=>prev? prev+"\n\n"+fullText:fullText); break;
        }
        setProjectsBox(false);
    }

    return(
        <div className={styles.projectsPop} style={{position:"absolute", left:position.x, top:position.y, cursor: dragging ? "grabbing":"grab"}}>
            <div className={styles.projectsHeadbar} onMouseDown={handleMouseDown}>Drag Menu</div>
            <button className={styles.xMark} onClick={()=>setProjectsBox(false)}>X</button>

            <label>Project Name:</label><input ref={projectName} /><br/>
            <label>Project URL:</label><input ref={projectURL} /><br/>
            <label>Project Description:</label><textarea ref={projectDescription} rows={3} cols={8}/><br/>
            <button onClick={handleAddProject}>Add Project</button><br/><br/>

            <h4>Projects So Far:</h4>
            <textarea value={projectEntries.join("\n\n")} readOnly style={{width:"100%", height:"120px", whiteSpace:"pre-wrap"}}/><br/>
            <button onClick={handleFinalSubmit}>Submit All Projects</button>
        </div>
    );
}

export default Projects;
