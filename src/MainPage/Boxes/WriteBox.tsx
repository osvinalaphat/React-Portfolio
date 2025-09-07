import styles from "./Boxes.module.css"
import React, { useRef, useState, useEffect } from 'react'

type MyComponentProps = { setWriteBox: React.Dispatch<React.SetStateAction<boolean>>; setUsername: React.Dispatch<React.SetStateAction<string>>; setBiog: React.Dispatch<React.SetStateAction<string>>; };

function WriteBox({ setWriteBox, setUsername, setBiog } : MyComponentProps){
    const enterredUsername = useRef(null)
    const enterredBiog = useRef(null)

    const [position, setPosition] = useState({ x: 100, y: 100 });
    const [dragging, setDragging] = useState(false);
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        setDragging(true);
        setOffset({ x: e.clientX - position.x, y: e.clientY - position.y });
    };
    const handleMouseMove = (e: MouseEvent) => { if (dragging) setPosition({ x: e.clientX - offset.x, y: e.clientY - offset.y }); };
    const handleMouseUp = () => setDragging(false);
    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
        return () => { window.removeEventListener("mousemove", handleMouseMove); window.removeEventListener("mouseup", handleMouseUp); };
    });

    return (
        <div className={styles.writePop} style={{ position: "absolute", left: position.x, top: position.y, cursor: dragging ? "grabbing" : "grab" }}>
            <div className={styles.writeHeadbar} onMouseDown={handleMouseDown}>Drag Menu</div>
            <button className={styles.xMark} onClick={() => {setWriteBox(false)}}> X </button>
            <div className={styles.nameMain}>
                <label className={styles.nameLabel}>Type your name:</label>
                <input className={styles.nameText} ref={enterredUsername} placeholder={"Name Here"} />
                <button onClick={() => setUsername(enterredUsername.current.value)}>Submit</button>
            </div>
            <div className={styles.biogMain}>
                <label className={styles.biogLabel}>Type your Biography:</label>
                <textarea ref={enterredBiog} placeholder={"Biography Here"} rows={8} cols={20}></textarea>
                <button onClick={() => setBiog(enterredBiog.current.value)}>Change Biography</button>
            </div>
        </div>
    );
}

export default WriteBox;
