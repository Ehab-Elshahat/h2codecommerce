/** @format */

import { createContext, useState } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);


  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    
    if (!existingProduct) {
      setCart([...cart, product]);
    } else {
      console.log("Product is already in cart!");
    }
    

  };
  
  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider, CartContext };
