/** @format */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductInCart({ item, isFavorites }) {
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(quantity * item.price);
  }, [quantity]);
  return (
    <div className=" mb-2">
      <div className="border-bottom  d-flex justify-content-between align-content-center bg-light p-1 p-md-3 rounded">
        <div
          className="overflow-hidden p-2"
          style={{
            width: "100px",
            height: "100px",
            margin: "20px auto",
          }}
        >
          <img
            src={item.image}
            className="card-img-top  w-100 h-100 "
            alt={item.title}
          />
        </div>
        <div className={`w-75 ps-2`}>
          <h5 className=" my-2 pb-0 h6">{item.title}</h5>
          {isFavorites && <p className=" fst-italic">{item.description}</p>}
          <p className=" my-2">
            Price: <span className="text-warning fw-bold ">${item.price}</span>
          </p>
          <div className="d-flex align-items-center justify-content-between">
            <Link
              to={`/product/${item.id}`}
              className="btn btn-outline-primary btn-sm"
            >
              Details
            </Link>

            {!isFavorites && (
              <div className="border rounded p-1 ">
                <button
                  className="btn btn-sm border bg-danger text-light fw-bold"
                  onClick={() => setQuantity(quantity - 1)}
                >
                  -
                </button>
                <span className="mx-2 ">{quantity}</span>
                <button
                  className="btn btn-sm border bg-success text-light "
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            )}
          </div>
          {!isFavorites && (
            <div
              className="text-center border rounded px-2 py-1 mx-auto mt-2 "
              style={{ width: "fit-content" }}
            >
              Total: {total}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductInCart;
