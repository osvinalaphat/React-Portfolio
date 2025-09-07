import { SubtextBoxesInfo } from "../../MainPage";
import styles from "./BoxInfos.module.css";
import React, { useContext, useEffect, useRef, useState } from "react";

type GPABoxTypes = {
  GPABoxNumber: string;
  setGPABox: React.Dispatch<React.SetStateAction<boolean>>;
};

function GPA({ GPABoxNumber, setGPABox }: GPABoxTypes) {
  const {
    unweightedGPA,
    setUnweightedGPA,
    weightedGPA,
    setWeightedGPA,
    setBox1Subtext1,
    setBox2Subtext1,
    setBox3Subtext1,
    setBox4Subtext1,
    setBox5Subtext1,
    setBox6Subtext1,
    setBox1Subtext2,
    setBox2Subtext2,
    setBox3Subtext2,
    setBox4Subtext2,
    setBox5Subtext2,
    setBox6Subtext2,
  } = useContext(SubtextBoxesInfo);

  const unweightedGPAEnterred = useRef<HTMLTextAreaElement>(null);
  const weightedGPAEnterred = useRef<HTMLTextAreaElement>(null);

  // --- Draggable state ---
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

  // --- GPA display logic ---
  useEffect(() => {
    const uw = parseFloat(unweightedGPA);
    const w = parseFloat(weightedGPA);

    if (GPABoxNumber === "1") {
      setBox1Subtext1(!isNaN(uw) ? "Unweighted GPA\n" + uw : "");
      setBox1Subtext2(!isNaN(w) ? "Weighted GPA\n" + w : "");
    }
    if (GPABoxNumber === "2") {
      setBox2Subtext1(!isNaN(uw) ? "Unweighted GPA\n" + uw : "");
      setBox2Subtext2(!isNaN(w) ? "Weighted GPA\n" + w : "");
    }
    if (GPABoxNumber === "3") {
      setBox3Subtext1(!isNaN(uw) ? "Unweighted GPA\n" + uw : "");
      setBox3Subtext2(!isNaN(w) ? "Weighted GPA\n" + w : "");
    }
    if (GPABoxNumber === "4") {
      setBox4Subtext1(!isNaN(uw) ? "Unweighted GPA\n" + uw : "");
      setBox4Subtext2(!isNaN(w) ? "Weighted GPA\n" + w : "");
    }
    if (GPABoxNumber === "5") {
      setBox5Subtext1(!isNaN(uw) ? "Unweighted GPA\n" + uw : "");
      setBox5Subtext2(!isNaN(w) ? "Weighted GPA\n" + w : "");
    }
    if (GPABoxNumber === "6") {
      setBox6Subtext1(!isNaN(uw) ? "Unweighted GPA\n" + uw : "");
      setBox6Subtext2(!isNaN(w) ? "Weighted GPA\n" + w : "");
    }
  }, [weightedGPA, unweightedGPA]);

  // --- Handlers for submit buttons ---
  const handleUnweightedSubmit = () => {
    if (unweightedGPAEnterred.current) {
      const val = parseFloat(unweightedGPAEnterred.current.value);
      if (!isNaN(val)) {
        setUnweightedGPA(val.toString());
      } else {
        alert("Please enter a valid number for Unweighted GPA.");
      }
    }
  };

  const handleWeightedSubmit = () => {
    if (weightedGPAEnterred.current) {
      const val = parseFloat(weightedGPAEnterred.current.value);
      if (!isNaN(val)) {
        setWeightedGPA(val.toString());
      } else {
        alert("Please enter a valid number for Weighted GPA.");
      }
    }
  };

  return (
    <div
      className={styles.GPAPop}
      style={{
        position: "absolute",
        left: position.x,
        top: position.y,
        cursor: dragging ? "grabbing" : "grab",
      }}
    >
      <div className={styles.GPAHeadbar} onMouseDown={handleMouseDown}>
        Drag Menu
      </div>
      <button className={styles.xMark} onClick={() => setGPABox(false)}>
        X
      </button>

      <label>Unweighted GPA</label>
      <textarea ref={unweightedGPAEnterred}></textarea>
      <button onClick={handleUnweightedSubmit}>Submit Unweighted GPA</button>
      <br />
      <label>Weighted GPA</label>
      <textarea ref={weightedGPAEnterred}></textarea>
      <button onClick={handleWeightedSubmit}>Submit Weighted GPA</button>
    </div>
  );
}

export default GPA;
