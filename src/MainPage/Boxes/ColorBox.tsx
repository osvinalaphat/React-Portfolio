import styles from "./Boxes.module.css"
import React, { useRef, useState } from 'react'

type MyComponentProps = {
  setColorBox: React.Dispatch<React.SetStateAction<boolean>>;
  setUsernameColor: React.Dispatch<React.SetStateAction<string>>;
  setBiogColor:  React.Dispatch<React.SetStateAction<string>>;
  setBackgroundColor:  React.Dispatch<React.SetStateAction<string>>;
  setBox1Color: React.Dispatch<React.SetStateAction<string>>;
  setBox2Color: React.Dispatch<React.SetStateAction<string>>;
  setBox3Color: React.Dispatch<React.SetStateAction<string>>;
  setBox4Color: React.Dispatch<React.SetStateAction<string>>;
  setBox5Color: React.Dispatch<React.SetStateAction<string>>;
  setBox6Color: React.Dispatch<React.SetStateAction<string>>;
  setBox1Color2: React.Dispatch<React.SetStateAction<string>>;
  setBox2Color2: React.Dispatch<React.SetStateAction<string>>;
  setBox3Color2: React.Dispatch<React.SetStateAction<string>>;
  setBox4Color2: React.Dispatch<React.SetStateAction<string>>;
  setBox5Color2: React.Dispatch<React.SetStateAction<string>>;
  setBox6Color2: React.Dispatch<React.SetStateAction<string>>;
};

function ColorBox({
  setColorBox,
  setUsernameColor,
  setBiogColor,
  setBackgroundColor,
  setBox1Color,
  setBox2Color,
  setBox3Color,
  setBox4Color,
  setBox5Color,
  setBox6Color,
  setBox1Color2,
  setBox2Color2,
  setBox3Color2,
  setBox4Color2,
  setBox5Color2,
  setBox6Color2
}: MyComponentProps) {

  const boxRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 100, y: 100 });
  const dragging = useRef(false);
  const offset = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    dragging.current = true;
    offset.current = { x: e.clientX - pos.x, y: e.clientY - pos.y };
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!dragging.current) return;
    setPos({ x: e.clientX - offset.current.x, y: e.clientY - offset.current.y });
  };

  const handleMouseUp = () => {
    dragging.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <div
      ref={boxRef}
      className={styles.colorPop}
      style={{ position: "absolute", top: pos.y, left: pos.x }}
    >
      <div
        className={styles.colorsHeadbar}
        onMouseDown={handleMouseDown}
        style={{ cursor: "move" }}
      >
        Drag Menu
      </div>

      <button className={styles.xMark} onClick={() => { setColorBox(false) }}> X </button>

      <div className={styles.colorBody}>
        <div className={styles.changeNameColor}>
          <label>Title color: </label>
          <select className={styles.nameColorDrop} onChange={(event) => setUsernameColor(event.target.value)}>
            <option></option>
            <option value="#dd5555">Red</option>
            <option value="#dd7733">Orange</option>
            <option value="#ffee45">Yellow</option>
            <option value="#aaeeaa">Green</option>
            <option value="#5555dd">Blue</option>
            <option value="#aa22dd">Purple</option>
            <option>black</option>
            <option>white</option>
          </select>
        </div>

        <br></br>

        <div className={styles.changeBiogColor}>
          <label>Biography color: </label>
          <select className={styles.biogColorDrop} onChange={(event) => setBiogColor(event.target.value)}>
            <option></option>
            <option value="#dd5555">Red</option>
            <option value="#dd7733">Orange</option>
            <option value="#ffee45">Yellow</option>
            <option value="#aaeeaa">Green</option>
            <option value="#5555dd">Blue</option>
            <option value="#aa22dd">Purple</option>
            <option>black</option>
            <option>white</option>
          </select>
        </div>

        <br></br>

        <div className={styles.changeBackgroundColor}>
          <label>Background color: </label>
          <select className={styles.backgroundColorDrop} onChange={(event) => setBackgroundColor(event.target.value)}>
            <option></option>
            <option value="#dd5555">Red</option>
            <option value="#dd7733">Orange</option>
            <option value="#ffee45">Yellow</option>
            <option value="#aaeeaa">Green</option>
            <option value="#5555dd">Blue</option>
            <option value="#aa22dd">Purple</option>
            <option>black</option>
            <option>white</option>
          </select>
        </div>

        <br></br>

        <div className={styles.changeBox1Color}>
          <label>Box 1 color: </label>
          <select className={styles.box1ColorDrop} onChange={(event) => setBox1Color(event.target.value)}>
            <option></option>
            <option value="#dd5555">Red</option>
            <option value="#dd7733">Orange</option>
            <option value="#ffee45">Yellow</option>
            <option value="#aaeeaa">Green</option>
            <option value="#5555dd">Blue</option>
            <option value="#aa22dd">Purple</option>
            <option>black</option>
            <option>white</option>
          </select>
        </div>

        <div className={styles.changeBox2Color}>
          <label>Box 2 color: </label>
          <select className={styles.box2ColorDrop} onChange={(event) => setBox2Color(event.target.value)}>
            <option></option>
            <option value="#dd5555">Red</option>
            <option value="#dd7733">Orange</option>
            <option value="#ffee45">Yellow</option>
            <option value="#aaeeaa">Green</option>
            <option value="#5555dd">Blue</option>
            <option value="#aa22dd">Purple</option>
            <option>black</option>
            <option>white</option>
          </select>
        </div>

        <div className={styles.changeBox1Color}>
          <label>Box 3 color: </label>
          <select className={styles.box3ColorDrop} onChange={(event) => setBox3Color(event.target.value)}>
            <option></option>
            <option value="#dd5555">Red</option>
            <option value="#dd7733">Orange</option>
            <option value="#ffee45">Yellow</option>
            <option value="#aaeeaa">Green</option>
            <option value="#5555dd">Blue</option>
            <option value="#aa22dd">Purple</option>
            <option>black</option>
            <option>white</option>
          </select>
        </div>

        <div className={styles.changeBox1Color}>
          <label>Box 4 color: </label>
          <select className={styles.box4ColorDrop} onChange={(event) => setBox4Color(event.target.value)}>
            <option></option>
            <option value="#dd5555">Red</option>
            <option value="#dd7733">Orange</option>
            <option value="#ffee45">Yellow</option>
            <option value="#aaeeaa">Green</option>
            <option value="#5555dd">Blue</option>
            <option value="#aa22dd">Purple</option>
            <option>black</option>
            <option>white</option>
          </select>
        </div>

        <div className={styles.changeBox1Color}>
          <label>Box 5 color: </label>
          <select className={styles.box5ColorDrop} onChange={(event) => setBox5Color(event.target.value)}>
            <option></option>
            <option value="#dd5555">Red</option>
            <option value="#dd7733">Orange</option>
            <option value="#ffee45">Yellow</option>
            <option value="#aaeeaa">Green</option>
            <option value="#5555dd">Blue</option>
            <option value="#aa22dd">Purple</option>
            <option>black</option>
            <option>white</option>
          </select>
        </div>

        <div className={styles.changeBox1Color}>
          <label>Box 6 color: </label>
          <select className={styles.box6ColorDrop} onChange={(event) => setBox6Color(event.target.value)}>
            <option></option>
            <option value="#dd5555">Red</option>
            <option value="#dd7733">Orange</option>
            <option value="#ffee45">Yellow</option>
            <option value="#aaeeaa">Green</option>
            <option value="#5555dd">Blue</option>
            <option value="#aa22dd">Purple</option>
            <option>black</option>
            <option>white</option>
          </select>
        </div>

        <br></br>

        <div className={styles.changeBox1Color2}>
          <label>Box 1 outline color: </label>
          <select className={styles.box1ColorDrop2} onChange={(event) => setBox1Color2(event.target.value)}>
            <option></option>
            <option value="#dd5555">Red</option>
            <option value="#dd7733">Orange</option>
            <option value="#ffee45">Yellow</option>
            <option value="#aaeeaa">Green</option>
            <option value="#5555dd">Blue</option>
            <option value="#aa22dd">Purple</option>
            <option>black</option>
            <option>white</option>
          </select>
        </div>

        {/* Box 2-6 outline color selects */}
        <div className={styles.changeBox2Color2}>
          <label>Box 2 outline color: </label>
          <select className={styles.box2ColorDrop2} onChange={(event) => setBox2Color2(event.target.value)}>
            <option></option>
            <option value="#dd5555">Red</option>
            <option value="#dd7733">Orange</option>
            <option value="#ffee45">Yellow</option>
            <option value="#aaeeaa">Green</option>
            <option value="#5555dd">Blue</option>
            <option value="#aa22dd">Purple</option>
            <option>black</option>
            <option>white</option>
          </select>
        </div>

        <div className={styles.changeBox3Color}>
          <label>Box 3 outline color: </label>
          <select className={styles.box3ColorDrop2} onChange={(event) => setBox3Color2(event.target.value)}>
            <option></option>
            <option value="#dd5555">Red</option>
            <option value="#dd7733">Orange</option>
            <option value="#ffee45">Yellow</option>
            <option value="#aaeeaa">Green</option>
            <option value="#5555dd">Blue</option>
            <option value="#aa22dd">Purple</option>
            <option>black</option>
            <option>white</option>
          </select>
        </div>

        <div className={styles.changeBox1Color}>
          <label>Box 4 outline color: </label>
          <select className={styles.box4ColorDrop2} onChange={(event) => setBox4Color2(event.target.value)}>
            <option></option>
            <option value="#dd5555">Red</option>
            <option value="#dd7733">Orange</option>
            <option value="#ffee45">Yellow</option>
            <option value="#aaeeaa">Green</option>
            <option value="#5555dd">Blue</option>
            <option value="#aa22dd">Purple</option>
            <option>black</option>
            <option>white</option>
          </select>
        </div>

        <div className={styles.changeBox1Color}>
          <label>Box 5 outline color: </label>
          <select className={styles.box5ColorDrop2} onChange={(event) => setBox5Color2(event.target.value)}>
            <option></option>
            <option value="#dd5555">Red</option>
            <option value="#dd7733">Orange</option>
            <option value="#ffee45">Yellow</option>
            <option value="#aaeeaa">Green</option>
            <option value="#5555dd">Blue</option>
            <option value="#aa22dd">Purple</option>
            <option>black</option>
            <option>white</option>
          </select>
        </div>

        <div className={styles.changeBox1Color}>
          <label>Box 6 outline color: </label>
          <select className={styles.box6ColorDrop2} onChange={(event) => setBox6Color2(event.target.value)}>
            <option></option>
            <option value="#dd5555">Red</option>
            <option value="#dd7733">Orange</option>
            <option value="#ffee45">Yellow</option>
            <option value="#aaeeaa">Green</option>
            <option value="#5555dd">Blue</option>
            <option value="#aa22dd">Purple</option>
            <option>black</option>
            <option>white</option>
          </select>
        </div>

      </div>
    </div>
  );
}

export default ColorBox;
