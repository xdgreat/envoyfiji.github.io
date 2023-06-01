import React, {useEffect} from "react";
import NavBar from "../components/navbar";
import '../reset.css'
import '../App.css'


function Product() {
  function setTitle() {
    useEffect(() => {
      document.title = "Envoy Fiji | Product";
    }, []);
  }
  setTitle();
  return (
    <>
    <NavBar/>
    
    </>
  );
}

export default Product;
