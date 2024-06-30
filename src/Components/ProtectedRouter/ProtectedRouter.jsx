/** @format */

import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router-dom";

const auth = getAuth();

function ProtectedRouter(props) {
  const [user, setUser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);



  if (user === null) {
    
    return <Navigate to="/login"/>;
  } else {
    return props.children;
  }
}

export default ProtectedRouter;
