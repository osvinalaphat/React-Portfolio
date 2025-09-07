import styles from "./MainPage.module.css"
import React,{useEffect, useState, useRef, createContext} from 'react'
import ColorBox from "./Boxes/ColorBox.tsx"
import MarginsBox from "./Boxes/MarginsBox.tsx"
import TemplatesBox from "./Boxes/TemplatesBox.tsx"
import InfoBox from "./Boxes/InfoBox.tsx"
import WriteBox from "./Boxes/WriteBox.tsx"
import { auth } from "./firebase";



type ParentContextType = {
    setClubsBoxText: React.Dispatch<React.SetStateAction<string>>;
    clubsBoxText: string | undefined;
    box1Text: string;
    box2Text: string;
    box3Text: string;
    box4Text: string;
    box5Text: string;
    box6Text: string;
    setBox1Text: React.Dispatch<React.SetStateAction<string>>;
    setBox2Text: React.Dispatch<React.SetStateAction<string>>;
    setBox3Text: React.Dispatch<React.SetStateAction<string>>;
    setBox4Text: React.Dispatch<React.SetStateAction<string>>;
    setBox5Text: React.Dispatch<React.SetStateAction<string>>;
    setBox6Text: React.Dispatch<React.SetStateAction<string>>;
};

export const ParentPassedText = createContext<ParentContextType | null>(null);

type SportsBoxFiller = {
    setBox1Text: React.Dispatch<React.SetStateAction<string>>;
    setBox2Text: React.Dispatch<React.SetStateAction<string>>;
    setBox3Text: React.Dispatch<React.SetStateAction<string>>;
    setBox4Text: React.Dispatch<React.SetStateAction<string>>;
    setBox5Text: React.Dispatch<React.SetStateAction<string>>;
    setBox6Text: React.Dispatch<React.SetStateAction<string>>;
}

export const SportsBoxFiller = createContext<SportsBoxFiller| null>(null);


type SubtextBoxes = {
    unweightedGPA: string;
    setUnweightedGPA: React.Dispatch<React.SetStateAction<string>>;
    weightedGPA: number;
    setWeightedGPA: React.Dispatch<React.SetStateAction<number>>;
    setBox1Subtext1: React.Dispatch<React.SetStateAction<string>>;
    setBox2Subtext1: React.Dispatch<React.SetStateAction<string>>;
    setBox3Subtext1: React.Dispatch<React.SetStateAction<string>>;
    setBox4Subtext1: React.Dispatch<React.SetStateAction<string>>;
    setBox5Subtext1: React.Dispatch<React.SetStateAction<string>>;
    setBox6Subtext1: React.Dispatch<React.SetStateAction<string>>;
    setBox1Subtext2: React.Dispatch<React.SetStateAction<string>>;
    setBox2Subtext2: React.Dispatch<React.SetStateAction<string>>;
    setBox3Subtext2: React.Dispatch<React.SetStateAction<string>>;
    setBox4Subtext2: React.Dispatch<React.SetStateAction<string>>;
    setBox5Subtext2: React.Dispatch<React.SetStateAction<string>>;
    setBox6Subtext2: React.Dispatch<React.SetStateAction<string>>;
};

export const SubtextBoxesInfo = createContext<SubtextBoxes | null>(null);


function MainPage(showUserPage: boolean){
    const [showWriteBox, setWriteBox] = useState(false);
    const [showColorBox, setColorBox] = useState(false);
    const [showMarginsBox, setMarginsBox] = useState(false);
    const [showTemplatesBox, setTemplatesBox] = useState(false);
    const [showInfoBox, setInfoBox] = useState(false);


    const [username,setUsername] = useState("");
    const [biog, setBiog] = useState("");

    const [usernameColor, setUsernameColor] = useState("");
    const [userBiogColor, setBiogColor] = useState("");
    const [userBackgroundColor, setBackgroundColor] = useState("");

    const [biogLeft, setBiogLeft] = useState(550);
    const [biogTop, setBiogTop] = useState(60);
    const [nameLeft, setNameLeft] = useState(460);
    const [nameTop, setNameTop] = useState(0);

    const usernameRef = useRef(null)
    const biogRef = useRef(null)


    //BOX INFO!!
    //
    //BOX CSS 
    const [box1Width, setBox1Width] = useState(33);
    const [box2Width, setBox2Width] = useState(33);
    const [box3Width, setBox3Width] = useState(33);
    const [box4Width, setBox4Width] = useState(33);
    const [box5Width, setBox5Width] = useState(33);
    const [box6Width, setBox6Width] = useState(33);

    const [box1Height, setBox1Height] = useState(50);
    const [box2Height, setBox2Height] = useState(50);
    const [box3Height, setBox3Height] = useState(50);
    const [box4Height, setBox4Height] = useState(50);
    const [box5Height, setBox5Height] = useState(50);
    const [box6Height, setBox6Height] = useState(50);

    const [box1Left,setBox1Left] = useState(0);
    const [box1Top,setBox1Top] = useState(0);
    const [box2Left,setBox2Left] = useState(66);
    const [box2Top,setBox2Top] = useState(0);
    const [box3Left,setBox3Left] = useState(0);
    const [box3Top,setBox3Top] = useState(50);
    const [box4Left,setBox4Left] = useState(33);
    const [box4Top,setBox4Top] = useState(50);
    const [box5Left,setBox5Left] = useState(66);
    const [box5Top,setBox5Top] = useState(50);
    const [box6Left,setBox6Left] = useState(0);
    const [box6Top,setBox6Top] = useState(0);
    const [box6Show,setBox6Show] = useState(false);
    

    //BOX INTERNAL DATA
    //!!!!!!!!!
    //!!!!!!!!!

    const [box1Title,setBox1Title] = useState("Box 1");
    const [box2Title,setBox2Title] = useState("Box 2");
    const [box3Title,setBox3Title] = useState("Box 3");
    const [box4Title,setBox4Title] = useState("Box 4");
    const [box5Title,setBox5Title] = useState("Box 5");
    const [box6Title,setBox6Title] = useState("Box 6");

    const [box1Text,setBox1Text] = useState("");
    const [box2Text,setBox2Text] = useState("");
    const [box3Text,setBox3Text] = useState("");
    const [box4Text,setBox4Text] = useState("");
    const [box5Text,setBox5Text] = useState("");
    const [box6Text,setBox6Text] = useState("");


    //FOR GPA BOXES
    const [box1Subtext1,setBox1Subtext1] = useState("");
    const [box2Subtext1,setBox2Subtext1] = useState("");
    const [box3Subtext1,setBox3Subtext1] = useState("");
    const [box4Subtext1,setBox4Subtext1] = useState("");
    const [box5Subtext1,setBox5Subtext1] = useState("");
    const [box6Subtext1,setBox6Subtext1] = useState("");

    const [box1Subtext2,setBox1Subtext2] = useState("");
    const [box2Subtext2,setBox2Subtext2] = useState("");
    const [box3Subtext2,setBox3Subtext2] = useState("");
    const [box4Subtext2,setBox4Subtext2] = useState("");
    const [box5Subtext2,setBox5Subtext2] = useState("");
    const [box6Subtext2,setBox6Subtext2] = useState("");


    const [clubsBoxNumber, setClubsBoxNumber] = useState("0");
    const [GPABoxNumber, setGPABoxNumber] = useState("0");
    const [sportsBoxNumber, setSportsBoxNumber] = useState("0");
    const [serviceHoursBoxNumber, setServiceHoursBoxNumber] = useState("0");
    const [projectsBoxNumber, setProjectsBoxNumber] = useState("0");

    const [unweightedGPA,setUnweightedGPA] = useState("0");
    const [weightedGPA,setWeightedGPA] = useState(0);

    

    const [clubsBoxText,setClubsBoxText] = useState("");
    
    const [loaded, setLoaded] = useState(false);

    const box1Ref = useRef<HTMLDivElement>(null)
    const box2Ref = useRef<HTMLDivElement>(null)
    const box3Ref = useRef<HTMLDivElement>(null)
    const box4Ref = useRef<HTMLDivElement>(null)
    const box5Ref = useRef<HTMLDivElement>(null)
    const box6Ref = useRef<HTMLDivElement>(null)

    const [box1Color,setBox1Color] = useState();
    const [box2Color,setBox2Color] = useState();
    const [box3Color,setBox3Color] = useState();
    const [box4Color,setBox4Color] = useState();
    const [box5Color,setBox5Color] = useState();
    const [box6Color,setBox6Color] = useState();

    const [box1Color2,setBox1Color2] = useState();
    const [box2Color2,setBox2Color2] = useState();
    const [box3Color2,setBox3Color2] = useState();
    const [box4Color2,setBox4Color2] = useState();
    const [box5Color2,setBox5Color2] = useState();
    const [box6Color2,setBox6Color2] = useState();

    const box1Coordinates = useRef<{x: number, y:number}>({x:box1Left, y:box1Top})
    const box2Coordinates = useRef<{x: number, y:number}>({x:box2Left, y:box2Top})
    const box3Coordinates = useRef<{x: number, y:number}>({x:box3Left, y:box3Top})
    const box4Coordinates = useRef<{x: number, y:number}>({x:box4Left, y:box4Top})
    const box5Coordinates = useRef<{x: number, y:number}>({x:box5Left, y:box5Top})
    const box6Coordinates = useRef<{x: number, y:number}>({x:box6Left, y:box6Top})

    const backgroundRef = useRef<HTMLDivElement>(null)
    
    

    


    useEffect(()=> {
        auth.currentUser.getIdToken()
        .then(token => {
            if(!token){
                console.log("no token found");
                return
            }
            else{
                console.log(`token found: ${token}`)
            }
            fetch("http://127.0.0.1:8000/hold-info", {
                headers: {
                    Authorization: `Bearer ${token}`
            }
        })    
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setUsername(data.username || "Title");
            setBiog(data.biog);
            setUsernameColor(data.usernameColor);
            setBiogColor(data.userBiogColor);
            setBackgroundColor(data.userBackgroundColor);

            setBiogLeft(data.biogLeft);
            setBiogTop(data.biogTop);
            setNameLeft(data.nameLeft);
            setNameTop(data.nameTop);

            setBox1Color(data.box1Color);
            setBox2Color(data.box2Color);
            setBox3Color(data.box3Color);
            setBox4Color(data.box4Color);
            setBox6Color(data.box6Color);
            setBox5Color(data.box5Color);
            setBox1Color2(data.box1Color2);
            setBox2Color2(data.box2Color2);
            setBox3Color2(data.box3Color2);
            setBox4Color2(data.box4Color2);
            setBox5Color2(data.box5Color2);
            setBox6Color2(data.box6Color2);

            setBox1Width(data.box1Width);
            setBox2Width(data.box2Width);
            setBox3Width(data.box3Width);
            setBox4Width(data.box4Width);
            setBox5Width(data.box5Width);
            setBox6Width(data.box6Width);
            setBox1Height(data.box1Height);
            setBox2Height(data.box2Height);
            setBox3Height(data.box3Height);
            setBox4Height(data.box4Height);
            setBox5Height(data.box5Height);
            setBox6Height(data.box6Height);

            setBox1Left(data.box1Left);
            setBox1Top(data.box1Top);
            setBox2Left(data.box2Left);
            setBox2Top(data.box2Top);
            setBox3Left(data.box3Left);
            setBox3Top(data.box3Top);
            setBox4Left(data.box4Left);
            setBox4Top(data.box4Top);
            setBox5Left(data.box5Left);
            setBox5Top(data.box5Top);
            setBox6Left(data.box6Left);
            setBox6Top(data.box6Top);
            setBox6Show(data.box6Show);

            setBox1Title(data.box1Title || "Box 1");
            setBox2Title(data.box2Title || "Box 2");
            setBox3Title(data.box3Title || "Box 3");
            setBox4Title(data.box4Title || "Box 4");
            setBox5Title(data.box5Title || "Box 5");
            setBox6Title(data.box6Title || "Box 6");

            setBox1Text(data.box1Text);
            setBox2Text(data.box2Text);
            setBox3Text(data.box3Text);
            setBox4Text(data.box4Text);
            setBox5Text(data.box5Text);
            setBox6Text(data.box6Text);

            setBox1Subtext1(data.box1Subtext1);
            setBox2Subtext1(data.box2Subtext1);
            setBox3Subtext1(data.box3Subtext1);
            setBox4Subtext1(data.box4Subtext1);
            setBox5Subtext1(data.box5Subtext1);
            setBox6Subtext1(data.box6Subtext1);

            setBox1Subtext2(data.box1Subtext2);
            setBox2Subtext2(data.box2Subtext2);
            setBox3Subtext2(data.box3Subtext2);
            setBox4Subtext2(data.box4Subtext2);
            setBox5Subtext2(data.box5Subtext2);
            setBox6Subtext2(data.box6Subtext2);

            setClubsBoxNumber(data.clubsBoxNumber);
            setGPABoxNumber(data.GPABoxNumber);
            setSportsBoxNumber(data.sportsBoxNumber);
            setServiceHoursBoxNumber(data.serviceHoursBoxNumber);
            setProjectsBoxNumber(data.projectsBoxNumber);

            setUnweightedGPA(data.unweightedGPA);
            setWeightedGPA(data.weightedGPA);
            setLoaded(true);
        });
    });
    },[showUserPage]);


    useEffect(() => {
        if(!loaded)
            return;

        auth.currentUser.getIdToken().then(token => {
            fetch("http://127.0.0.1:8000/save-portfolio", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    username: username,
                    biog: biog,
                    userBackgroundColor : userBackgroundColor,
                    usernameColor : usernameColor,
                    userBiogColor: userBiogColor,
                    biogLeft: biogLeft,
                    biogTop: biogTop,
                    nameLeft: nameLeft,
                    nameTop: nameTop,
                    box1Color: box1Color,
                    box2Color: box2Color,
                    box3Color: box3Color,
                    box4Color: box4Color,
                    box5Color: box5Color,
                    box6Color: box6Color,
                    box1Color2: box1Color2,
                    box2Color2: box2Color2,
                    box3Color2: box3Color2,
                    box4Color2: box4Color2,
                    box5Color2: box5Color2,
                    box6Color2: box6Color2,
                    box1Width: box1Width,
                    box2Width: box2Width,
                    box3Width: box3Width,
                    box4Width: box4Width,
                    box5Width: box5Width,
                    box6Width: box6Width,
                    box1Height: box1Height,
                    box2Height: box2Height,
                    box3Height: box3Height,
                    box4Height: box4Height,
                    box5Height: box5Height,
                    box6Height: box6Height,
                    box1Left: box1Left,
                    box1Top: box1Top,
                    box2Left: box2Left,
                    box2Top: box2Top,
                    box3Left: box3Left,
                    box3Top: box3Top,
                    box4Left: box4Left,
                    box4Top: box4Top,
                    box5Left: box5Left,
                    box5Top: box5Top,
                    box6Left: box6Left,
                    box6Top: box6Top,
                    box6Show: box6Show,
                    box1Title: box1Title,
                    box2Title: box2Title,
                    box3Title: box3Title,
                    box4Title: box4Title,
                    box5Title: box5Title,
                    box6Title: box6Title,
                    box1Text: box1Text,
                    box2Text: box2Text,
                    box3Text: box3Text,
                    box4Text: box4Text,
                    box5Text: box5Text,
                    box6Text: box6Text,
                    box1Subtext1: box1Subtext1,
                    box2Subtext1: box2Subtext1,
                    box3Subtext1: box3Subtext1,
                    box4Subtext1: box4Subtext1,
                    box5Subtext1: box5Subtext1,
                    box6Subtext1: box6Subtext1,
                    box1Subtext2: box1Subtext2,
                    box2Subtext2: box2Subtext2,
                    box3Subtext2: box3Subtext2,
                    box4Subtext2: box4Subtext2,
                    box5Subtext2: box5Subtext2,
                    box6Subtext2: box6Subtext2,
                    clubsBoxNumber: clubsBoxNumber,
                    GPABoxNumber: GPABoxNumber,
                    sportsBoxNumber: sportsBoxNumber,
                    serviceHoursBoxNumber: serviceHoursBoxNumber,
                    projectsBoxNumber: projectsBoxNumber,
                    unweightedGPA: unweightedGPA,
                    weightedGPA: weightedGPA
                })
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            });
        });
    }, [
        username, biog, userBackgroundColor, usernameColor, userBiogColor,
        biogLeft, biogTop, nameLeft, nameTop,
        box1Color, box2Color, box3Color, box4Color, box5Color, box6Color,
        box1Color2,box2Color2,box3Color2, box4Color2, box5Color2, box6Color2,
        box1Width,box2Width,box3Width,box4Width,box5Width,box6Width,
        box1Height,box2Height,box3Height,box4Height,box5Height,box6Height,
        box1Left, box1Top, box2Left, box2Top, box3Left, box3Top,
        box4Left, box4Top, box5Left, box5Top, box6Left, box6Top,
        box6Show,
        box1Title, box2Title, box3Title, box4Title, box5Title, box6Title,
        box1Text, box2Text, box3Text, box4Text, box5Text, box6Text,
        box1Subtext1, box2Subtext1, box3Subtext1, box4Subtext1, box5Subtext1, box6Subtext1,
        box1Subtext2, box2Subtext2, box3Subtext2, box4Subtext2, box5Subtext2, box6Subtext2,
        clubsBoxNumber, GPABoxNumber, sportsBoxNumber, serviceHoursBoxNumber, projectsBoxNumber,
        unweightedGPA, weightedGPA
    ]);

    useEffect(() => {
        if (!loaded) return;

        const isClicked = { current: false };
        const isResizing = { current: false };
        const resizeDirection = { current: "" };
        const activeBox = { current: null as HTMLDivElement | null };
        const coordinates = { current: { offsetX: 0, offsetY: 0, startWidth: 0, startHeight: 0 } };

        function onMouseDown(e: MouseEvent) {
            const target = e.currentTarget as HTMLDivElement;
            activeBox.current = target;
            isClicked.current = true;

            const rect = target.getBoundingClientRect();
            const offsetX = e.clientX - rect.left;
            const offsetY = e.clientY - rect.top;

            const edgeSize = 8;
            const nearLeft = offsetX < edgeSize;
            const nearRight = offsetX > rect.width - edgeSize;
            const nearTop = offsetY < edgeSize;
            const nearBottom = offsetY > rect.height - edgeSize;

            if (nearLeft || nearRight || nearTop || nearBottom) {
                isResizing.current = true;
                if (nearLeft) resizeDirection.current = "left";
                if (nearRight) resizeDirection.current = "right";
                if (nearTop) resizeDirection.current = "top";
                if (nearBottom) resizeDirection.current = "bottom";
            } else {
                // ✅ fallback to drag mode
                isResizing.current = false;
                coordinates.current.offsetX =
                e.clientX - parseInt(window.getComputedStyle(target).left || "0", 10);
                coordinates.current.offsetY =
                e.clientY - parseInt(window.getComputedStyle(target).top || "0", 10);
            }

            coordinates.current.startWidth = rect.width;
            coordinates.current.startHeight = rect.height;
            }


        function onMouseMove(e: MouseEvent) {
            if (!isClicked.current || !activeBox.current) return;

            const backgroundWidth = backgroundRef.current!.offsetWidth;
            const backgroundHeight = backgroundRef.current!.offsetHeight;

            if (isResizing.current) {
            // Resize mode
            let newWidth = coordinates.current.startWidth;
            let newHeight = coordinates.current.startHeight;

            if (resizeDirection.current === "right") {
                newWidth = e.clientX - activeBox.current.getBoundingClientRect().left;
            } else if (resizeDirection.current === "bottom") {
                newHeight = e.clientY - activeBox.current.getBoundingClientRect().top;
            } else if (resizeDirection.current === "left") {
                const deltaX = e.clientX - activeBox.current.getBoundingClientRect().left;
                newWidth = coordinates.current.startWidth - deltaX;
                activeBox.current.style.left =
                ((e.clientX - backgroundRef.current!.getBoundingClientRect().left) /
                    backgroundWidth) *
                    100 +
                "%";
            } else if (resizeDirection.current === "top") {
                const deltaY = e.clientY - activeBox.current.getBoundingClientRect().top;
                newHeight = coordinates.current.startHeight - deltaY;
                activeBox.current.style.top =
                ((e.clientY - backgroundRef.current!.getBoundingClientRect().top) /
                    backgroundHeight) *
                    100 +
                "%";
            }

            activeBox.current.style.width = `${(newWidth / backgroundWidth) * 100}%`;
            activeBox.current.style.height = `${(newHeight / backgroundHeight) * 100}%`;
            } else {
            // Drag mode
            let currentX = (e.clientX - coordinates.current.offsetX) / backgroundWidth * 100;
            let currentY = (e.clientY - coordinates.current.offsetY) / backgroundHeight * 100;

            activeBox.current.style.left = `${currentX}%`;
            activeBox.current.style.top = `${currentY}%`;
            }
        }

        function onMouseUp() {
            if (!activeBox.current) return;

            const backgroundWidth = backgroundRef.current!.offsetWidth;
            const backgroundHeight = backgroundRef.current!.offsetHeight;

            const left = parseInt(activeBox.current.style.left || "0");
            const top = parseInt(activeBox.current.style.top || "0");
            const width = parseFloat(activeBox.current.style.width || "0");
            const height = parseFloat(activeBox.current.style.height || "0");

            switch (activeBox.current.id) {
            case "box1":
                setBox1Left(left);
                setBox1Top(top);
                setBox1Width(width);
                setBox1Height(height);
                break;
            case "box2":
                setBox2Left(left);
                setBox2Top(top);
                setBox2Width(width);
                setBox2Height(height);
                break;
            case "box3":
                setBox3Left(left);
                setBox3Top(top);
                setBox3Width(width);
                setBox3Height(height);
                break;
            case "box4":
                setBox4Left(left);
                setBox4Top(top);
                setBox4Width(width);
                setBox4Height(height);
                break;
            case "box5":
                setBox5Left(left);
                setBox5Top(top);
                setBox5Width(width);
                setBox5Height(height);
                break;
            case "box6":
                setBox6Left(left);
                setBox6Top(top);
                setBox6Width(width);
                setBox6Height(height);
                break;
            }

            isClicked.current = false;
            isResizing.current = false;
            activeBox.current = null;
        }

        const allBoxes = [
            box1Ref.current,
            box2Ref.current,
            box3Ref.current,
            box4Ref.current,
            box5Ref.current,
            box6Ref.current,
        ].filter(Boolean) as HTMLDivElement[];

        allBoxes.forEach((box) => {
            box.addEventListener("mousedown", onMouseDown);
        });

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseUp);

        return () => {
            allBoxes.forEach((box) => {
            box.removeEventListener("mousedown", onMouseDown);
            });
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseup", onMouseUp);
        };
        }, [loaded]);



    return(
        <>
            <div style={{backgroundColor: userBackgroundColor}} className={styles.background} ref={backgroundRef} />


                <h1 ref={usernameRef} style={{ color: usernameColor,  position: "absolute", left: `${nameLeft}px`, top: `${nameTop}px`, zIndex : `2`}}>{username}'s Portfolio</h1>
                <p ref={biogRef} style={{ color: userBiogColor, position: "absolute", left: `${biogLeft}px`, top: `${biogTop}px`, zIndex : `2`}}>{biog}</p>

                
                    <div className={styles.box1} ref={box1Ref} id="box1" style={{width: `${box1Width}%`, height: `${box1Height}%`,left: `${box1Left}%`, top:`${box1Top}%`, backgroundColor:`${box1Color}`, borderColor: `${box1Color2}`}}>
                        <h2 style={{color : `${box1Color2}`}}>{box1Title}</h2>
                        <h3 className={styles.subtext1} style={{color : `${box1Color2}`}}>{box1Subtext1 ? box1Subtext1.split("\n").map((line, index) => (
                            <React.Fragment key={index}>
                            {line}
                            <br />
                            </React.Fragment>
                        )): ""}</h3>
                        <h3 className={styles.subtext2} style={{color : `${box1Color2}`}}>{box1Subtext2 ? box1Subtext2.split("\n").map((line, index) => (
                            <React.Fragment key={index}>
                            {line}
                            <br />
                            </React.Fragment>
                        )): ""}</h3>
                        <p style={{color : `${box1Color2}`}}>{box1Text ? box1Text.split("\n").map((line, index) => (
                            <React.Fragment key={index}>
                            {line}
                            <br />
                            </React.Fragment>
                        )): ""}</p>
                    </div>
                    <div className={styles.box2} ref={box2Ref} id="box2" style={{width: `${box2Width}%`, height: `${box2Height}%`,left: `${box2Left}%`, top:`${box2Top}% `, backgroundColor:`${box2Color}`, borderColor: `${box2Color2}`}}>
                        <h2 style={{color : `${box2Color2}`}}>{box2Title}</h2>
                        <h3 className={styles.subtext1} style={{color : `${box2Color2}`}}>{box2Subtext1 ? box2Subtext1.split("\n").map((line, index) => (
                            <React.Fragment key={index}>
                            {line}
                            <br />
                            </React.Fragment>
                        )): ""}</h3>
                        <h3 className={styles.subtext2} style={{color : `${box2Color2}`}}>{box2Subtext2 ? box2Subtext2.split("\n").map((line, index) => (
                            <React.Fragment key={index}>
                            {line}
                            <br />
                            </React.Fragment>
                        )): ""}</h3>
                        <p style={{color : `${box2Color2}`}}>{box2Text ? box2Text.split("\n").map((line, index) => (
                            <React.Fragment key={index}>
                            {line}
                            <br />
                            </React.Fragment>
                        )): ""}</p>
                    </div>
                    <div className={styles.box3} ref={box3Ref} id="box3" style={{width: `${box3Width}%`, height: `${box3Height}%`,left: `${box3Left}%`, top:`${box3Top}%`, backgroundColor:`${box3Color}`, borderColor: `${box3Color2}`}}>
                        <h2 style={{color : `${box3Color2}`}}>{box3Title}</h2>
                        <h3 className={styles.subtext1} style={{color : `${box3Color2}`}}>{box3Subtext1 ? box3Subtext1.split("\n").map((line, index) => (
                            <React.Fragment key={index}>
                            {line}
                            <br />
                            </React.Fragment>
                        )): ""}</h3>
                        <h3 className={styles.subtext2} style={{color : `${box3Color2}`}}>{box3Subtext2 ? box3Subtext2.split("\n").map((line, index) => (
                            <React.Fragment key={index}>
                            {line}
                            <br />
                            </React.Fragment>
                        )): ""}</h3>
                        <p style={{color : `${box3Color2}`}}>{box3Text ? box3Text.split("\n").map((line, index) => (
                            <React.Fragment key={index}>
                            {line}
                            <br />
                            </React.Fragment>
                        )): ""}</p>    
                    </div>
                    <div className={styles.box4} ref={box4Ref} id="box4" style={{width: `${box4Width}%`, height: `${box4Height}%`,left: `${box4Left}%`, top:`${box4Top}%`, backgroundColor:`${box4Color}`, borderColor: `${box4Color2}`}}>
                        <h2 style={{color : `${box4Color2}`}}>{box4Title}</h2>
                        <h3 className={styles.subtext1} style={{color : `${box4Color2}`}}>{box4Subtext1 ? box4Subtext1.split("\n").map((line, index) => (
                            <React.Fragment key={index}>
                            {line}
                            <br />
                            </React.Fragment>
                        )): ""}</h3>
                        <h3 className={styles.subtext2} style={{color : `${box4Color2}`}}>{box4Subtext2 ? box4Subtext2.split("\n").map((line, index) => (
                            <React.Fragment key={index}>
                            {line}
                            <br />
                            </React.Fragment>
                        )): ""}</h3>
                        <p style={{color : `${box4Color2}`}}>{box4Text ? box4Text.split("\n").map((line, index) => (
                            <React.Fragment key={index}>
                            {line}
                            <br />
                            </React.Fragment>
                        )): ""}</p>    
                    </div>
                    <div className={styles.box5} ref={box5Ref} id="box5" style={{width: `${box5Width}%`, height: `${box5Height}%`,left: `${box5Left}%`, top:`${box5Top}%`, backgroundColor:`${box5Color}`, borderColor: `${box5Color2}`}}>
                        <h2 style={{color : `${box5Color2}`}}>{box5Title}</h2>
                        <h3 className={styles.subtext1} style={{color : `${box5Color2}`}}>{box5Subtext1 ? box5Subtext1.split("\n").map((line, index) => (
                            <React.Fragment key={index}>
                            {line}
                            <br />
                            </React.Fragment>
                        )): ""}</h3>
                        <h3 className={styles.subtext2} style={{color : `${box5Color2}`}}>{box5Subtext2 ? box5Subtext2.split("\n").map((line, index) => (
                            <React.Fragment key={index}>
                            {line}
                            <br />
                            </React.Fragment>
                        )): ""}</h3>
                        <p style={{color : `${box5Color2}`}}>{box5Text ? box5Text.split("\n").map((line, index) => (
                            <React.Fragment key={index}>
                            {line}
                            <br />
                            </React.Fragment>
                        )): ""}</p>
                    </div>
                    {box6Show && <div className={styles.box6} ref={box6Ref} id="box6" style={{width: `${box6Width}%`, height: `${box6Height}%`,left: `${box6Left}%`, top:`${box6Top}%`, backgroundColor:`${box6Color}`, borderColor: `${box6Color2}`}}>
                        <h2 style={{color : `${box6Color2}`}}>{box6Title}</h2>
                        <h3 className={styles.subtext1} style={{color : `${box6Color2}`}}>{box6Subtext1 ? box6Subtext1.split("\n").map((line, index) => (
                            <React.Fragment key={index}>
                            {line}
                            <br />
                            </React.Fragment>
                        )): ""}</h3>
                        <h3 className={styles.subtext2} style={{color : `${box6Color2}`}}>{box6Subtext1 ? box6Subtext1.split("\n").map((line, index) => (
                            <React.Fragment key={index}>
                            {line}
                            <br />
                            </React.Fragment>
                        )): ""}</h3>
                        <p style={{color : `${box6Color2}`}}>{box6Text ? box6Text.split("\n").map((line, index) => (
                            <React.Fragment key={index}>
                            {line}
                            <br />
                            </React.Fragment>
                        )): ""}</p>    
                    </div>}

                <div className={styles.menu}>
                    <div className={styles.menuLoadOut}>
                        <button onClick={ () => {
                            setWriteBox(true);
                        }}>Change Text</button>
                        <button onClick={ () => {
                            setColorBox(true);
                        }}>Change Coloring</button>
                        <button onClick={ () => {
                            setMarginsBox(true);
                        }}>Change Margins</button>
                        <button onClick={ () => {
                            setTemplatesBox(true);
                        }}>Templates</button>
                        <button onClick={ () => {
                            setInfoBox(true);
                        }}>Box Info</button>
                        <button>Clear Portfolio</button>
                    </div>
                    <button className={styles.menuArrow}>\/</button>
                </div>

                {(showWriteBox) && <WriteBox setWriteBox={setWriteBox} setUsername={setUsername} setBiog={setBiog} />}
                {(showColorBox) && <ColorBox setColorBox={setColorBox} setUsernameColor={setUsernameColor} setBiogColor={setBiogColor} setBackgroundColor ={setBackgroundColor} setBox1Color={setBox1Color} setBox2Color={setBox2Color} setBox3Color={setBox3Color} setBox4Color={setBox4Color} setBox5Color={setBox5Color} setBox6Color={setBox6Color} setBox1Color2={setBox1Color2} setBox2Color2={setBox2Color2} setBox3Color2={setBox3Color2} setBox4Color2={setBox4Color2} setBox5Color2={setBox5Color2} setBox6Color2={setBox6Color2}/>} 
                {(showMarginsBox) && <MarginsBox setMarginsBox={setMarginsBox} biogLeft={biogLeft} setBiogLeft={setBiogLeft} biogTop={biogTop} setBiogTop={setBiogTop} nameLeft={nameLeft} setNameLeft={setNameLeft} nameTop={nameTop} setNameTop={setNameTop}  />}
                {(showTemplatesBox) && <TemplatesBox setTemplatesBox={setTemplatesBox} setBox1Width={setBox1Width} setBox2Width={setBox2Width} setBox3Width={setBox3Width} setBox4Width={setBox4Width} setBox5Width={setBox5Width} setBox6Width={setBox6Width} setBox1Height={setBox1Height} setBox2Height={setBox2Height} setBox3Height={setBox3Height} setBox4Height={setBox4Height} setBox5Height={setBox5Height} setBox6Height={setBox6Height} setBox1Left={setBox1Left} setBox1Top={setBox1Top} setBox2Left={setBox2Left} setBox2Top={setBox2Top} setBox3Left={setBox3Left} setBox3Top={setBox3Top} setBox4Left={setBox4Left} setBox4Top={setBox4Top} setBox5Left={setBox5Left} setBox5Top={setBox5Top} setBox6Left={setBox6Left} setBox6Top={setBox6Top} setBox6Show={setBox6Show} />}
                <ParentPassedText.Provider value={{setClubsBoxText, box1Text, box2Text,  box3Text,  box4Text,  box5Text,  box6Text, clubsBoxText, setBox1Text, setBox2Text, setBox3Text, setBox4Text, setBox5Text,setBox6Text}}>
                <SubtextBoxesInfo.Provider value={{unweightedGPA,setUnweightedGPA,weightedGPA,setWeightedGPA,setBox1Subtext1,setBox2Subtext1,setBox3Subtext1,setBox4Subtext1,setBox5Subtext1,setBox6Subtext1,setBox1Subtext2,setBox2Subtext2,setBox3Subtext2,setBox4Subtext2,setBox5Subtext2,setBox6Subtext2}}>
                <SportsBoxFiller.Provider value={{setBox1Text, setBox2Text, setBox3Text, setBox4Text, setBox5Text,setBox6Text}}>
                    {(showInfoBox) && <InfoBox setInfoBox={setInfoBox} clubsBoxNumber={clubsBoxNumber} setClubsBoxNumber={setClubsBoxNumber} GPABoxNumber={GPABoxNumber} setGPABoxNumber={setGPABoxNumber} serviceHoursBoxNumber={serviceHoursBoxNumber} setServiceHoursBoxNumber={setServiceHoursBoxNumber} sportsBoxNumber={sportsBoxNumber} setSportsBoxNumber={setSportsBoxNumber} projectsBoxNumber={projectsBoxNumber} setProjectsBoxNumber={setProjectsBoxNumber} box1Title={box1Title} setBox1Title={setBox1Title} box2Title={box2Title} setBox2Title={setBox2Title} box3Title={box3Title} setBox3Title={setBox3Title} box4Title={box4Title} setBox4Title={setBox4Title} box5Title={box5Title} setBox5Title={setBox5Title} box6Title={box6Title} setBox6Title={setBox6Title} setBox1Text={setBox1Text} setBox2Text={setBox2Text} setBox3Text={setBox3Text} setBox4Text={setBox4Text} setBox5Text={setBox5Text} setBox6Text={setBox6Text}/>}
                </SportsBoxFiller.Provider>
                </SubtextBoxesInfo.Provider>
                </ParentPassedText.Provider>



        </>
    );
}

export default MainPage