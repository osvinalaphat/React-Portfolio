import MainPage from "./MainPage/MainPage.tsx"
import Login from "./MainPage/Login.tsx"
import React, {useState} from 'react'


function App() {

  const [showUserPage, setUserPage] = useState(false);
  const [showLogInPage, setLogInPage] = useState(true);


  return (
    <>
      {showLogInPage && <Login  setUserPage={setUserPage}  setLogInPage={setLogInPage} ></Login>}
      {showUserPage && <MainPage showUserPage={showUserPage}></MainPage>}
    </>
  );
}

export default App
