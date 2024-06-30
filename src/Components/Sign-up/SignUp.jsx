/** @format */

import React, { useEffect, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

// import Joi from "joi";


function SignUp() {
  const navigate = useNavigate();
  const [onlineMessage, setOnlineMessage] = useState(false);
  const [errorMessage, setErrormessage] = useState(null);
  const [userData, setUserData] = useState({
    name: " ",
    email: " ",
    password: " ",
  });

  function getInputsOnSubmit(e) {
    let copyUserData = { ...userData };
    copyUserData[e.target.name] = e.target.value;

    setUserData(copyUserData);
  }

  async function handleSubmitForm(event) {
    event.preventDefault();
    // let validation = validateRegisterForm();
    // if (validation.error) {
    //   setErrormessage(
    //     validation.error.details.map((er, index) => (
    //       <p key={index}>
    //         {index + 1}- {er.message}
    //       </p>
    //     ))
    //   );
    // }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );
    
      navigate("/login");
    } catch (error) {
      setErrormessage(error.message)
    
      
    }
  }

  // function validateRegisterForm() {
  //   const schema = Joi.object({
  //     name: Joi.string().min(3).max(30).required(),
  //     email: Joi.string()
  //       .email({ tlds: { allow: ["com", "net"] } })
  //       .required(),
  //     password: Joi.string()
  //       .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
  //       .min(6)
  //       .max(30)
  //       .required(),
  //   });
  //   return schema.validate(userData, { abortEarly: false });
  // }


  // Detected Online
  useEffect(() => {
    const isOnline = navigator.onLine;
    if (!isOnline) {
      
      setOnlineMessage(true);
    } 
  }, [])

  return (
    <div className="container">
      <Helmet>
        <meta charset="utf-8" />
        <title>H2Commerce Sign-up</title>
      </Helmet>
      <div className="row justify-content-center">
        <div className="col-md-6">
          {onlineMessage && (
            <div className=" alert alert-secondary">You are offline</div>
          )}
          {errorMessage && (
            <div className="alert alert-danger relative">
              {errorMessage}{" "}
              <span
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  cursor: "pointer",
                }}
                onClick={() => setErrormessage(null)}
              >
                <i className="fa-solid fa-x"></i>
              </span>
            </div>
          )}
        </div>
      </div>
      <h2 className="text-center fw-normal my-3">Sign Up</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form
            onSubmit={handleSubmitForm}
            className="border p-3 rounded shadow"
          >
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                onChange={getInputsOnSubmit}
                type="text"
                className="form-control "
                id="name"
                name="name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                onChange={getInputsOnSubmit}
                type="email"
                className="form-control "
                id="email"
                name="email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                onChange={getInputsOnSubmit}
                type="password"
                className="form-control"
                id="password"
                name="password"
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary px-4 text-capitalize"
            >
              Sign up
            </button>
            <div className="mt-2 d-flex align-items-center">
              <p className="text-muted fs-6 mb-0">Already Have Account</p>

              <Link
                to={"/login"}
                className="mx-2 btn btn-success text-light py-1 px-2 rounded "
              >
                <span className="mx-1">Login</span>
                <i className="fa-solid fa-right-to-bracket"></i>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
