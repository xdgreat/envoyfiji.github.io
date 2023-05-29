import React from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import AboutHero from "../components/AboutHero";
import Team from "../components/team";
import Maps from "../components/maps";
import Contact from "../components/contact";
const About = () => {
  return (
    <>
      <NavBar />
      <AboutHero/>
      <Team/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default About;
