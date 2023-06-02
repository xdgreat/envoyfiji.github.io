import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductPage from "./pages/productPage.jsx";
import About from "./pages/about.jsx";
import Cart from "./pages/cart.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/product",
    element: <ProductPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path:"/cart",
    element: <Cart/>
  },
  {
    path:"*",
    element:<PageNotFound/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
