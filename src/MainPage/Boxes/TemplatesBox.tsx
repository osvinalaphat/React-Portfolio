import styles from "./Boxes.module.css";
import React, { useState, useEffect } from 'react';

type MyComponentProps = {
    setTemplatesBox: React.Dispatch<React.SetStateAction<boolean>>;
    setBox1Width: React.Dispatch<React.SetStateAction<number>>;
    setBox2Width: React.Dispatch<React.SetStateAction<number>>;
    setBox3Width: React.Dispatch<React.SetStateAction<number>>;
    setBox4Width: React.Dispatch<React.SetStateAction<number>>;
    setBox5Width: React.Dispatch<React.SetStateAction<number>>;
    setBox6Width: React.Dispatch<React.SetStateAction<number>>;
    setBox1Height: React.Dispatch<React.SetStateAction<number>>;
    setBox2Height: React.Dispatch<React.SetStateAction<number>>;
    setBox3Height: React.Dispatch<React.SetStateAction<number>>;
    setBox4Height: React.Dispatch<React.SetStateAction<number>>;
    setBox5Height: React.Dispatch<React.SetStateAction<number>>;
    setBox6Height: React.Dispatch<React.SetStateAction<number>>;
    setBox1Left: React.Dispatch<React.SetStateAction<number>>;
    setBox1Top: React.Dispatch<React.SetStateAction<number>>;
    setBox2Left: React.Dispatch<React.SetStateAction<number>>;
    setBox2Top: React.Dispatch<React.SetStateAction<number>>;
    setBox3Left: React.Dispatch<React.SetStateAction<number>>;
    setBox3Top: React.Dispatch<React.SetStateAction<number>>;
    setBox4Left: React.Dispatch<React.SetStateAction<number>>;
    setBox4Top: React.Dispatch<React.SetStateAction<number>>;
    setBox5Left: React.Dispatch<React.SetStateAction<number>>;
    setBox5Top: React.Dispatch<React.SetStateAction<number>>;
    setBox6Left: React.Dispatch<React.SetStateAction<number>>;
    setBox6Top: React.Dispatch<React.SetStateAction<number>>;
    setBox6Show: React.Dispatch<React.SetStateAction<boolean>>;
};

function TemplatesBox({ setTemplatesBox, setBox1Width, setBox2Width, setBox3Width, setBox4Width, setBox5Width, setBox6Width,
    setBox1Height, setBox2Height, setBox3Height, setBox4Height, setBox5Height, setBox6Height,
    setBox1Left, setBox1Top, setBox2Left, setBox2Top, setBox3Left, setBox3Top, setBox4Left, setBox4Top,
    setBox5Left, setBox5Top, setBox6Left, setBox6Top, setBox6Show
}: MyComponentProps) {

    // Dragging state
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

    const templatesChanger = (templateNumber: string) => {
        if (templateNumber === "1") {
            setBox1Left(0); setBox1Top(0); setBox2Left(66); setBox2Top(0); setBox3Left(0); setBox3Top(50);
            setBox4Left(33); setBox4Top(50); setBox5Left(66); setBox5Top(50); setBox6Left(0); setBox6Top(0);
            setBox6Show(false); setBox1Width(33); setBox1Height(50); setBox2Width(33); setBox2Height(50);
            setBox3Width(33); setBox3Height(50); setBox4Width(33); setBox4Height(50); setBox5Width(33);
            setBox5Height(50); setBox6Width(33); setBox6Height(50);
        } else if (templateNumber === "2") {
            setBox1Left(33); setBox1Top(0); setBox2Left(66); setBox2Top(0); setBox3Left(33); setBox3Top(33);
            setBox4Left(66); setBox4Top(33); setBox5Left(33); setBox5Top(66); setBox6Left(66); setBox6Top(66);
            setBox1Width(33); setBox1Height(33); setBox2Width(33); setBox2Height(33); setBox3Width(33); setBox3Height(33);
            setBox4Width(33); setBox4Height(33); setBox5Width(33); setBox5Height(33); setBox6Width(33); setBox6Height(33);
            setBox6Show(true);
        } else if (templateNumber === "3") {
            setBox1Left(0); setBox1Top(33); setBox2Left(33); setBox2Top(33); setBox3Left(66); setBox3Top(33);
            setBox4Left(0); setBox4Top(66); setBox5Left(33); setBox5Top(66); setBox6Left(66); setBox6Top(66);
            setBox6Show(true); setBox1Width(33); setBox1Height(33); setBox2Width(33); setBox2Height(33);
            setBox3Width(33); setBox3Height(33); setBox4Width(33); setBox4Height(33); setBox5Width(33);
            setBox5Height(33); setBox6Width(33); setBox6Height(33);
        }
    };

    return (
        <div className={styles.templatesPop} style={{ position: "absolute", left: position.x, top: position.y, cursor: dragging ? "grabbing" : "grab" }}>
            <div id="templatesHeadbar" className={styles.templatesHeadbar} onMouseDown={handleMouseDown}>Drag Menu</div>
            <button className={styles.xMark} onClick={() => setTemplatesBox(false)}> X </button>

            <p>Centre</p>
            <button>Choose</button>

            <label>Change Templates</label><br />
            <button onClick={() => templatesChanger("1")}>
                ____ . . . ____<br />
                |___|___|___|<br/>
                |___|___|___|
            </button>
            <button onClick={() => templatesChanger("2")}>
                ____________<br/>
                |......|___|___|<br/>
                |......|___|___|<br/>
                |___|___|___|
            </button>
            <button onClick={() => templatesChanger("3")}>
                ____ . . . ____<br/>
                |___________|<br/>
                |___|___|___|<br/>
                |___|___|___|
            </button>
        </div>
    );
}

export default TemplatesBox;
