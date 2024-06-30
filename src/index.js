/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import SignUp from "./Components/Sign-up/SignUp";
import Login from "./Components/Login/Login";
import Cart from "./Components/Cart/Cart";
import NotFoundPage from "./Components/NotFoundPage/NotFoundPage";
import DataContextProvider from "./Components/Context/AllProductsContext";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import CategoryPage from "./Components/CategoryPage/CategoryPage";
import { CartProvider } from "./Components/Context/CartContext";
import ProtectedRouter from "./Components/ProtectedRouter/ProtectedRouter";
import Favorites from "./Components/Favorites/Favorites";
import { FavoritesProvider } from "./Components/Context/FavoritesContext";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      { index: true, element: <SignUp /> },
      { path: "signup", element: <SignUp /> },
      {
        path: "home",
        element: (
          <ProtectedRouter>
            <Home />
          </ProtectedRouter>
        ),
      },
      {
        path: "favorites",
        element: (
          <ProtectedRouter>
            <Favorites />
          </ProtectedRouter>
        ),
      },
      { path: "login", element: <Login /> },
      {
        path: "cart",
        element: (
          <ProtectedRouter>
            <Cart />
          </ProtectedRouter>
        ),
      },
      {
        path: "/:category",
        element: (
          <ProtectedRouter>
            <CategoryPage />{" "}
          </ProtectedRouter>
        ),
      },
      {
        path: "product/:id",
        element: (
          <ProtectedRouter>
            <ProductDetails />
          </ProtectedRouter>
        ),
      },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DataContextProvider>
      <CartProvider>
        <FavoritesProvider>
          <RouterProvider router={router}>
            <App />
          </RouterProvider>
        </FavoritesProvider>
      </CartProvider>
    </DataContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
