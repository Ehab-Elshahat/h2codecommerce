/** @format */

import { useContext, useEffect } from "react";
import { CartContext } from "../Context/CartContext";

import ProductInCart from "../ProductInCart/ProductInCart";
import { Helmet } from "react-helmet";



const Cart = () => {

  const { cart } = useContext(CartContext);

  



  return (
    <div className="container" style={{ marginBottom: "100px" }}>
      <Helmet>
        <meta charset="utf-8" />
        <title>H2Commerce Cart</title>
      </Helmet>
      <h1 className="text-center my-3">Cart</h1>
      <div className="">
        {cart && cart.length > 0 ? (
          cart.map((item, index) => <ProductInCart key={index} item={item} />)
        ) : (
          <div className="alert alert-danger text-center my-4" role="alert">
            The Cart Is Empty
          </div>
        )}

        <div
          className="text-center border rounded p-2 px-3 mx-auto mt-2 bg-warning"
          style={{ width: "fit-content" }}
        >
          Total of All Products:
          <span className="h4">
            {cart.reduce((acc, item) => acc + item.price, 0)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
