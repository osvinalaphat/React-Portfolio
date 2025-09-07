import { SportsBoxFiller } from '../../MainPage';
import styles from './BoxInfos.module.css'
import React,{useRef, useContext,useState,useEffect} from 'react'

type SportsBoxTypes = {
    sportsBoxNumber: string;
    setSportsBox: React.Dispatch<React.SetStateAction<boolean>>;
}

function Sports({sportsBoxNumber, setSportsBox}:SportsBoxTypes){

    const sportsNameEnterred = useRef(null);
    const sportsSeasonEnterred = useRef(null);
    const sportsTeamLevelEnterred = useRef(null);

    const [sportsLine, setSportsLine] = useState("");

    const { setBox1Text, setBox2Text, setBox3Text, setBox4Text, setBox5Text, setBox6Text} = useContext(SportsBoxFiller);

    // --- Draggable state ---
    const [position, setPosition] = useState({ x: 100, y: 100 });
    const [dragging, setDragging] = useState(false);
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        setDragging(true);
        setOffset({ x: e.clientX - position.x, y: e.clientY - position.y });
    };
    const handleMouseMove = (e: MouseEvent) => {
        if (dragging) setPosition({ x: e.clientX - offset.x, y: e.clientY - offset.y });
    };
    const handleMouseUp = () => setDragging(false);

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    });

    useEffect(() => {
        if (!sportsLine) return;
        if (sportsBoxNumber === "1") setBox1Text(prev => prev ? prev + "\n" + sportsLine : sportsLine);
        if (sportsBoxNumber === "2") setBox2Text(prev => prev ? prev + "\n" + sportsLine : sportsLine);
        if (sportsBoxNumber === "3") setBox3Text(prev => prev ? prev + "\n" + sportsLine : sportsLine);
        if (sportsBoxNumber === "4") setBox4Text(prev => prev ? prev + "\n" + sportsLine : sportsLine);
        if (sportsBoxNumber === "5") setBox5Text(prev => prev ? prev + "\n" + sportsLine : sportsLine);
        if (sportsBoxNumber === "6") setBox6Text(prev => prev ? prev + "\n" + sportsLine : sportsLine);
    },[sportsLine]);

    return(
        <div className={styles.sportsPop} style={{position:"absolute", left:position.x, top:position.y, cursor: dragging ? "grabbing" : "grab"}}>
            <div className={styles.sportsHeadbar} onMouseDown={handleMouseDown}>Drag Menu</div>
            <button className={styles.xMark} onClick={() => setSportsBox(false)}>X</button>

            <select ref={sportsNameEnterred} >
                {/* options omitted for brevity */}
            </select>

            <br/>
            <label>Team Level:</label>
            <input ref={sportsTeamLevelEnterred} />

            <br/>
            <label>Season:</label>
            <select ref={sportsSeasonEnterred}>
                {/* options omitted for brevity */}
            </select>

            <br/>
            <button onClick={()=>{
                setSportsLine(`Sport:${sportsNameEnterred.current.value}  Team:${sportsTeamLevelEnterred.current.value}  Season:${sportsSeasonEnterred.current.value} `);
            }}>Submit Sports Info</button>
        </div>
    );
}

export default Sports;
