import React from 'react'
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div  className="container-fluid pt-5" >
      <div className=" row justify-content-center align-items-center ">
        <div  className="col-md-6 text-center">
          <h1 className="display-1">404</h1>
          <h2 className="mb-4">Page Not Found</h2>
          <p className="lead">The page you're looking for doesn't exist.</p>
          <Link className ="btn btn-info" to="/home">
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage