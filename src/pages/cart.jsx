import { React, useEffect } from "react";
import NavBar from "../components/navbar";

const Cart = () => {
  function setTitle() {
    useEffect(() => {
      document.title = "Envoy Fiji | Cart";
    }, []);
  }
  setTitle();
  return (
    <>
      <NavBar />
    </>
  );
};

export default Cart;
