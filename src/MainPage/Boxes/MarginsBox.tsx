import styles from "./Boxes.module.css";
import React, { useState } from "react";

type MyComponentProps = {
    setMarginsBox: React.Dispatch<React.SetStateAction<boolean>>;
    biogLeft: number;
    setBiogLeft: React.Dispatch<React.SetStateAction<number>>;
    biogTop: number;
    setBiogTop: React.Dispatch<React.SetStateAction<number>>;
    nameLeft: number;
    setNameLeft: React.Dispatch<React.SetStateAction<number>>;
    nameTop: number;
    setNameTop: React.Dispatch<React.SetStateAction<number>>;
};

function MarginsBox({ setMarginsBox, biogLeft, setBiogLeft, biogTop, setBiogTop, nameLeft, setNameLeft, nameTop, setNameTop }: MyComponentProps) {

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

    React.useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    });

    const moveBiog = (direction: string) => {
        if (direction === "right") setBiogLeft(biogLeft + 10);
        else if (direction === "left") setBiogLeft(biogLeft - 10);
        else if (direction === "up") setBiogTop(biogTop - 10);
        else if (direction === "bottom") setBiogTop(biogTop + 10);
    };

    const moveName = (direction: string) => {
        if (direction === "right") setNameLeft(nameLeft + 10);
        else if (direction === "left") setNameLeft(nameLeft - 10);
        else if (direction === "up") setNameTop(nameTop - 10);
        else if (direction === "bottom") setNameTop(nameTop + 10);
    };

    return (
        <div
            className={styles.marginsPop}
            style={{ position: "absolute", left: position.x, top: position.y, cursor: dragging ? "grabbing" : "grab" }}
        >
            <div className={styles.marginsHeadbar} onMouseDown={handleMouseDown}>Drag Menu</div>
            <button className={styles.xMark} onClick={() => setMarginsBox(false)}> X </button>

            <div className={styles.marginBody} style={{ overflowY: "scroll" }}>
                <div>
                    <button className={styles.titleLeft} onClick={() => moveName("left")}>{"<"}</button>
                    <button className={styles.titleRight} onClick={() => moveName("right")}>{">"}</button>
                    <p>Move Title</p>
                    <button className={styles.titleUp} onClick={() => moveName("up")}>/\\</button>
                    <button className={styles.titleDown} onClick={() => moveName("bottom")}>\\/</button>
                </div>

                <hr style={{ borderColor: "#465846" }} />

                <div>
                    <button className={styles.biogLeft} onClick={() => moveBiog("left")}>{"<"}</button>
                    <button className={styles.biogRight} onClick={() => moveBiog("right")}>{">"}</button>
                    <p>Move Biography</p>
                    <button className={styles.biogUp} onClick={() => moveBiog("up")}>/\\</button>
                    <button className={styles.biogDown} onClick={() => moveBiog("bottom")}>\\/</button>
                </div>
            </div>
        </div>
    );
}

export default MarginsBox;
