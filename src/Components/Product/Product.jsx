import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import { FavoritesContext } from '../Context/FavoritesContext';

function Product({item}) {
  const { addToCart } = useContext(CartContext);
  const [activeShoppingIcon, setActiveShoppingIcon] = useState(false)
  const {addToFavorites} = useContext(FavoritesContext)
  const [activeFavoritesIcon, setActiveFavoritesIcon] = useState(false);
  const handleAddToCart = ()=>{
    addToCart({...item})
    setActiveShoppingIcon(true)
  }
  const handleAddToFavorites = () => {
    addToFavorites({ ...item });
    setActiveFavoritesIcon(true)
  };
  return (
    <div className="col-sm-6 col-md-4  mb-4">
      <div className="card shadow">
        <div
          className="overflow-hidden"
          style={{
            width: "200px",
            height: "250px",
            margin: "20px auto",
          }}
        >
          <img
            src={item.image}
            className="card-img-top  w-100 h-100 "
            alt={item.title}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title h6">{item.title.substring(0, 20)}...</h5>
          <p className="card-text text-muted fst-italic mb-2">
            {item.description.substring(0, 40)}...
          </p>
          <p className=" lead fs-6">
            Price:{" "}
            <span className="text-warning fw-bold fs-5">${item.price}</span>
          </p>
          <div className="d-flex align-items-center justify-content-between">
            <Link
              to={`/product/${item.id}`}
              className="btn btn-outline-primary"
            >
              Details
            </Link>

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
            <button
              onClick={handleAddToFavorites}
              className={
                activeFavoritesIcon ? 
                `btn  btn-danger bg-danger`
              :`btn btn-outline-danger` }
            >
              <i className="fa-regular fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default Product