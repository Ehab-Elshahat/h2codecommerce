/** @format */
import {onAuthStateChanged} from "firebase/auth"
import { auth } from "./firebase";
import Footer from "./Components/Footer/Footer";
import Layout from "./Components/Layout/Layout";
import Navbar from "./Components/Navbar/Navbar";
import { useEffect, useState } from "react";

function App() {

  const [isUser, setIsUser] = useState(false)

   useEffect(() => {

     onAuthStateChanged(auth, (user) => {
       if (user) {
         // User is signed in, see docs for a list of available properties
         // https://firebase.google.com/docs/reference/js/firebase.User
        //  const uid = user.uid;
         // ...
      
         setIsUser(true)
         
       } else {
         // User is signed out
      
         setIsUser(false);
       }
     });
   }, []);

  return (
    <>
      <Navbar isUser={isUser} />
      <Layout isUser={isUser} />
      <Footer />
    </>
  );
}

export default App;
