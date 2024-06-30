/** @format */

import React, { useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { Helmet } from "react-helmet";

function Login() {
const navigate = useNavigate()
const [errorMessage, setErrormessage] = useState(null)
  const [userData, setUserData] = useState({
    email: '',
    password: ""
  })
function getInputsOnSubmit(e) {
  let copyUserData = { ...userData };
  copyUserData[e.target.name] = e.target.value;

  setUserData(copyUserData);
  
}

async function handleSubmitForm (e) {
  e.preventDefault();

  signInWithEmailAndPassword(auth, userData.email, userData.password).then(
    (userCredential) => {
      // Signed in
  
      navigate("/home");
    }
  ).catch((error) => {
    setErrormessage(error.message);
  })
}

  return (
    <div className="container">
      <Helmet>
        <meta charset="utf-8" />
        <title>H2Commerce Login</title>
      </Helmet>
      <div className="row justify-content-center">
        <div className="col-md-6">
          {errorMessage && (
            <div className="alert alert-danger text-center">{errorMessage}</div>
          )}
        </div>
      </div>
      <h2 className="text-center fw-normal my-3">Log in</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form
            onSubmit={handleSubmitForm}
            className="border p-3 rounded shadow"
          >
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
              Login
            </button>
            <div className="mt-2 d-flex align-items-center">
              <p className="text-muted fs-6 mb-0">You Don`t Have Account</p>

              <Link
                to={"/signup"}
                className="mx-2 btn btn-success text-light py-1 px-2 rounded "
              >
                <span className="mx-1">Sign up</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
