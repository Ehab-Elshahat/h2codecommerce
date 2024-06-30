import React from 'react'
import logo from "../../h2logo.png";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <footer className="d-flex align-items-center justify-content-center bg-dark fixed-bottom text-light p-3">
        <Link className="navbar-brand" to="home">
          <img
            className="rounded-circle shadow border"
            src={logo}
            alt="Logo"
            style={{
              width: "30px",
              height: "30px",
              objectFit: "cover",
            }}
          />
        </Link>
        <h6 className="mb-0 mx-2 fs-6">
          Created With Love <span className="text-danger">&hearts;</span> By
          Ehab Elshahat
        </h6>
      </footer>
    </>
  );
}

export default Footer