import { ParentPassedText } from "../../MainPage";
import styles from "./BoxInfos.module.css";
import React, { useContext, useRef, useState, useEffect } from "react";

type ClubsProps = {
    clubsBoxNumber: string;
    setClubsBox: React.Dispatch<React.SetStateAction<boolean>>;
};

function Clubs({ clubsBoxNumber, setClubsBox }: ClubsProps) {
    const { setBox1Text, setBox2Text, setBox3Text, setBox4Text, setBox5Text, setBox6Text } = useContext(ParentPassedText);

    const clubName = useRef(null);
    const clubPosition = useRef(null);
    const clubDescription = useRef(null);

    const [clubEntries, setClubEntries] = useState<string[]>([]);

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

    const handleAddClub = () => {
        const name = clubName.current.value.trim();
        const positionValue = clubPosition.current.value.trim();
        const description = clubDescription.current.value.trim();
        if (!name || !positionValue || !description) return;

        const entry = `${positionValue} of ${name}: ${description}`;
        setClubEntries(prev => [...prev, entry]);

        // Optional: clear inputs
        clubName.current.value = "";
        clubPosition.current.value = "";
        clubDescription.current.value = "";
    };

    const handleFinalSubmit = () => {
        const fullText = clubEntries.join("\n");

        switch (clubsBoxNumber) {
            case "1": setBox1Text(prev => prev ? prev + "\n" + fullText : fullText); break;
            case "2": setBox2Text(prev => prev ? prev + "\n" + fullText : fullText); break;
            case "3": setBox3Text(prev => prev ? prev + "\n" + fullText : fullText); break;
            case "4": setBox4Text(prev => prev ? prev + "\n" + fullText : fullText); break;
            case "5": setBox5Text(prev => prev ? prev + "\n" + fullText : fullText); break;
            case "6": setBox6Text(prev => prev ? prev + "\n" + fullText : fullText); break;
        }

        setClubsBox(false);
    };

    return (
        <div
            className={styles.clubsPop}
            style={{ position: "absolute", left: position.x, top: position.y, cursor: dragging ? "grabbing" : "grab" }}
        >
            <div className={styles.clubsHeadbar} onMouseDown={handleMouseDown}>
                Drag Menu
            </div>
            <button className={styles.xMark} onClick={() => setClubsBox(false)}>X</button>

            <label>Club Name:</label>
            <input ref={clubName} />
            <br />

            <label>Club Position:</label>
            <input ref={clubPosition} />
            <br />

            <label>Club Description:</label>
            <textarea ref={clubDescription} cols={8} rows={3} />
            <br />

            <button onClick={handleAddClub}>Add Club</button>
            <br /><br />

            <h4>Clubs So Far:</h4>
            <textarea
                value={clubEntries.join("\n")}
                readOnly
                style={{ width: "100%", height: "100px", whiteSpace: "pre-wrap" }}
            />
            <br />

            <button onClick={handleFinalSubmit}>Submit All Clubs</button>
        </div>
    );
}

export default Clubs;
