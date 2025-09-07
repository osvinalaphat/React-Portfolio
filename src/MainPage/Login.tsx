import styles from "./Login.module.css";
import React, { useRef } from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics"; // optional

// ✅ Firebase config and initialization
const firebaseConfig = {
  apiKey: "AIzaSyBScCHQRvwumXBR9Ef1Z0cdhdmc9BexuG4",
  authDomain: "portfolio-d5c42.firebaseapp.com",
  projectId: "portfolio-d5c42",
  storageBucket: "portfolio-d5c42.appspot.com",
  messagingSenderId: "893202911708",
  appId: "1:893202911708:web:17c379569b9dee2dbdff19",
  measurementId: "G-BWKCMW42G6"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

type LogInProps = {
    setUserPage: React.Dispatch<React.SetStateAction<boolean>>;
    setLogInPage: React.Dispatch<React.SetStateAction<string>>;
}

function LogIn({ setUserPage, setLogInPage,}: LogInProps) {
  const logInUsername = useRef(null);
  const logInPassword = useRef(null);
  const signUpUsername = useRef(null);
  const signUpPassword = useRef(null);

  const login = () => {
    const email = logInUsername.current.value;
    const password = logInPassword.current.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Login successful!");
        console.log("Logged in user:", userCredential.user);
        setLogInPage(false);
        setUserPage(true);
    })
      .catch((error) => {
        alert("Login Error: " + error.message);
      });
  };

  const signup = () => {
    const email = signUpUsername.current.value;
    const password = signUpPassword.current.value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Sign up successful!");
        console.log("Signed up user:", userCredential.user);
        setLogInPage(false);
        setUserPage(true);
      })
      .catch((error) => {
        alert("Signup Error: " + error.message);
      });
  };

  return (
    <div className={styles.enterWebsite}>
      <h2>Sign Up:</h2>
      <label>Username (Email):</label>
      <input placeholder="ex. 2027004@sluh.org" ref={signUpUsername} />
      <p></p>
      <label>Password:</label>
      <input type="password" placeholder="ex. gobills123" ref={signUpPassword} />
      <br /><br />
      <button onClick={signup}>Sign Up</button>

      <br /><br /><br />

      <h2>Log In:</h2>
      <label>Username (Email):</label>
      <input placeholder="enter username" ref={logInUsername} />
      <br /><br />
      <label>Password:</label>
      <input type="password" placeholder="enter password" ref={logInPassword} />
      <br /><br />
      <button onClick={login}>Log In</button>
    </div>
  );
}

export default LogIn;
