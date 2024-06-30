/** @format */

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from '../../h2logo.png'
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import { FavoritesContext } from "../Context/FavoritesContext";


function Navbar({ isUser }) {

  const {cart}= useContext(CartContext)
  const { favorites } = useContext(FavoritesContext);

  const navigate = useNavigate()

  function logOut() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
       
      })
      .catch((error) => {
        // An error happened.
        console.log(error.code)
      });
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow px-3 fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="home">
            <img
              className="rounded-circle shadow border"
              src={logo}
              alt="Logo"
              style={{
                width: "50px",
                height: "50px",
                objectFit: "cover",
              }}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav  mb-2 mb-lg-0 "
              style={{ marginLeft: "auto" }}
            >
              {isUser && (
                <li className="nav-item">
                  <Link className="nav-link fs-5  mx-2" to={"home"}>
                    <span className="me-2"> Home</span>
                    <i className="fa-solid fa-house fa-sm"></i>
                  </Link>
                </li>
              )}

              {isUser ? (
                <Link onClick={logOut} className="nav-link fs-5 mx-2">
                  <span className="me-2">Log out</span>
                  <i className="fa-solid fa-right-from-bracket fa-sm"></i>
                </Link>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link fs-5 mx-2" to={"signup"}>
                      <span className="me-2"> Sign up</span>
                      <i className="fa-solid fa-user-plus fa-sm"></i>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link fs-5 mx-2" to={"login"}>
                      <span className="me-2">Log in</span>
                      <i className="fa-solid fa-right-to-bracket fa-sm"></i>
                    </Link>
                  </li>
                </>
              )}

              {isUser && (
                <li className="nav-item">
                  <Link className="nav-link fs-5 mx-2" to={"favorites"}>
                    <span className="me-2">Favorites</span>
                    {favorites.length > 0 ? (
                      <i className="fa-solid fa-heart fa-sm text-danger"></i>
                    ) : (
                      <i className="fa-solid fa-heart fa-sm "></i>
                    )}
                    
                  </Link>
                </li>
              )}

              {isUser && (
                <li className="nav-item">
                  <Link
                    className="nav-link fs-5 mx-2 position-relative"
                    to={"cart"}
                  >
                    <span className="me-2"> Cart</span>

                    <i className="fa-solid fa-cart-shopping fa-sm"></i>
                    <span
                      className=" position-absolute"
                      style={{
                        top: "0px",
                        right: "-7px",
                        backgroundColor: "#e91e63",
                        color: "#fff",
                        borderRadius: "50%",
                        width: "20px",
                        height: "20px",
                        fontSize: "10px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {cart.length}
                    </span>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
