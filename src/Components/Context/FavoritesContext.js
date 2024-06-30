/** @format */

import { createContext, useState } from "react";

const FavoritesContext = createContext();

function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (product) => {
    const existingProduct = favorites.find((item) => item.id === product.id);

    if (!existingProduct) {
      setFavorites([...favorites, product]);
    } else {
      console.log("Product is already in favorites!");
    }
    console.log(favorites);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export { FavoritesProvider, FavoritesContext };
