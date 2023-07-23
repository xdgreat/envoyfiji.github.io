import React, { useEffect } from "react";
import NavBar from "../components/navbar";
import "../reset.css";
import "../App.css";
import Productgallerypage from "../components/productgallerypage";

function Product() {
  function setTitle() {
    useEffect(() => {
      document.title = "Envoy Fiji | Product";
    }, []);
  }
  setTitle();
  return (
    <>
      <NavBar />
      <Productgallerypage />
    </>
  );
}

export default Product;
