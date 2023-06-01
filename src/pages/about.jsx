import React, { useEffect } from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import AboutHero from "../components/AboutHero";
import Team from "../components/team";
import Contact from "../components/contact";
const About = () => {
  function setTitle() {
    useEffect(() => {
      document.title = "Envoy Fiji | About";
    }, []);
  }
  setTitle();
  return (
    <>
      <NavBar />
      <AboutHero />
      <Team />
      <Contact />
      <Footer />
    </>
  );
};

export default About;
