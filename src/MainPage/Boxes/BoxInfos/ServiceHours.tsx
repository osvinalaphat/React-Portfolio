import styles from "./BoxInfos.module.css";
import React, { useRef, useContext, useState, useEffect } from "react";
import { ParentPassedText } from "../../MainPage";

type ServiceHoursProps = {
    serviceHoursBoxNumber: string;
    setServiceHoursBox: React.Dispatch<React.SetStateAction<boolean>>;
};

function ServiceHours({ serviceHoursBoxNumber, setServiceHoursBox }: ServiceHoursProps) {
    const hoursRef = useRef<HTMLInputElement>(null);
    const locationRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLTextAreaElement>(null);

    const {
        setBox1Text,
        setBox2Text,
        setBox3Text,
        setBox4Text,
        setBox5Text,
        setBox6Text
    } = useContext(ParentPassedText);

    const [serviceHoursEntries, setServiceHoursEntries] = useState<string[]>([]);

    // --- Draggable ---
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

    const handleAddEntry = () => {
        const hours = hoursRef.current?.value.trim();
        const location = locationRef.current?.value.trim();
        const description = descriptionRef.current?.value.trim();
        if (!hours || !location || !description) return;

        const newEntry = `${hours} hours at ${location}: ${description}`;
        setServiceHoursEntries(prev => [...prev, newEntry]);

        // Clear inputs
        if (hoursRef.current) hoursRef.current.value = "";
        if (locationRef.current) locationRef.current.value = "";
        if (descriptionRef.current) descriptionRef.current.value = "";
    };

    const handleFinalSubmit = () => {
        const fullText = serviceHoursEntries.join("\n");

        switch (serviceHoursBoxNumber) {
            case "1": setBox1Text(fullText); break;
            case "2": setBox2Text(fullText); break;
            case "3": setBox3Text(fullText); break;
            case "4": setBox4Text(fullText); break;
            case "5": setBox5Text(fullText); break;
            case "6": setBox6Text(fullText); break;
        }

        setServiceHoursBox(false); // Close popup
    };

    const handleClear = () => {
        setServiceHoursEntries([]); // clear local list

        // clear the actual box text
        switch (serviceHoursBoxNumber) {
            case "1": setBox1Text(""); break;
            case "2": setBox2Text(""); break;
            case "3": setBox3Text(""); break;
            case "4": setBox4Text(""); break;
            case "5": setBox5Text(""); break;
            case "6": setBox6Text(""); break;
        }
    };

    return (
        <div
            className={styles.serviceHoursPop}
            style={{
                position: "absolute",
                left: position.x,
                top: position.y,
                cursor: dragging ? "grabbing" : "grab"
            }}
        >
            <div className={styles.serviceHoursHeadbar} onMouseDown={handleMouseDown}>
                Drag Menu
            </div>
            <button className={styles.xMark} onClick={() => setServiceHoursBox(false)}>
                X
            </button>

            <label>Number of Service Hours</label>
            <input ref={hoursRef} type="number" /><br />

            <label>Location/Organization</label>
            <input ref={locationRef} type="text" /><br />

            <label>Description of Service</label>
            <textarea ref={descriptionRef} rows={4} cols={30} /><br />

            <button onClick={handleAddEntry}>Add Service Entry</button>

            <h3>All Entries So Far:</h3>
            <textarea
                value={serviceHoursEntries.join("\n")}
                readOnly
                style={{ width: "100%", height: "100px", whiteSpace: "pre-wrap" }}
            />

            <br />
            <button onClick={handleFinalSubmit}>Submit All Service Hours</button>
            <button onClick={handleClear} style={{ marginLeft: "10px", color: "red" }}>
                Clear All
            </button>
        </div>
    );
}

export default ServiceHours;
