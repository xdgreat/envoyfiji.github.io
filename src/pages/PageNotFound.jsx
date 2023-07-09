import { React, useEffect } from "react";
import NavBar from "../components/navbar";

const PageNotFound = () => {
  function setTitle() {
    useEffect(() => {
      document.title = "Envoy Fiji | Not Found";
    }, []);
  }
  setTitle();

  return (
    <>
      <NavBar />
      <h1 className="notfound">Page Not Found :(</h1>
    </>
  );
};

export default PageNotFound;
