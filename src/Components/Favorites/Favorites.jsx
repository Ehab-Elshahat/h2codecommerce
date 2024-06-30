import React, { useContext } from 'react'
import { FavoritesContext } from '../Context/FavoritesContext';
import ProductInCart from '../ProductInCart/ProductInCart';
import { Helmet } from 'react-helmet';


function Favorites() {
  const { favorites } = useContext(FavoritesContext)
  return (
    <div className="container">
      <Helmet>
        <meta charset="utf-8" />
        <title>H2Commerce Favorites</title>
      </Helmet>
      <h2 className="text-center my-3 text-danger">Favorites</h2>
      {favorites && favorites.length > 0 ? (
        favorites.map((item, index) => (
          <ProductInCart isFavorites={true} key={index} item={item} />
        ))
      ) : (
        <div className="alert alert-danger text-center my-4" role="alert">
          The favorites Is Empty
        </div>
      )}
    </div>
  );
}

export default Favorites