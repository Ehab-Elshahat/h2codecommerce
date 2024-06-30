/** @format */

import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Circles } from "react-loader-spinner";
import { CartContext } from "../Context/CartContext";


function ProductDetails() {


  
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const params = useParams();

  const { addToCart } = useContext(CartContext);
  const [activeShoppingIcon, setActiveShoppingIcon] = useState(false);
  const handleAddToCart = () => {
    addToCart({ ...product });
    setActiveShoppingIcon(true);
  };


  async function getProduct() {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://fakestoreapi.com/products/${params.id}`
      );
      setProduct(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  
  useEffect(() => {
    getProduct();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  

  return (
    <div className="container" style={{ marginBottom: "100px" }}>
      <h3 className="h3 text-center my-5 text-primary">{product.title}</h3>
      <div className="row justify-content-center">
        {loading && (
          <div className=" d-flex justify-content-center align-items-center  mt-5">
            <Circles
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        )}

        <div className="col-md-6 text-center mb-4">
          <img
            src={product.image}
            alt={product.title}
            className=""
            style={{ width: "300px", height: "300px" }}
          />
        </div>
        <div className="col-md-6">
          <p className="lead fst-italic">{product.description}</p>
          <p className="text-warning bg-secondary bg-gradient p-2 fs-5">
            Price: ${product.price}
          </p>
          <div className="d-flex justify-content-between align-content-center ">
            <button
              className={
                activeShoppingIcon
                  ? `btn  btn-success bg-success `
                  : `btn  btn-outline-success`
              }
              onClick={handleAddToCart}
            >
              {activeShoppingIcon ? (
                <i className="fa-solid fa-check"></i>
              ) : (
                <i className="fa-solid fa-cart-shopping "></i>
              )}
            </button>
            <button className="btn px-4  btn-outline-danger ">
              <i className="fa-regular fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
