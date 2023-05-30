import React from "react";
import logo from "../assets/EnvoyFiji.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="footer-row-one">
            <div className="footer-column-one">
              <img src={logo} alt="" className="logo" />
              <h2 className="footer-name">
                <a href="/">Envoy Fiji.</a>
              </h2>
            </div>
            <div className="footer-column-two">
              <a href="#motivation" className="footer-text">
                Motivation
              </a>
              <a href="#fitness" className="footer-text">
                Fitness Hub
              </a>
              <a href="#history" className="footer-text">
                Our History
              </a>
            </div>
            <div className="footer-column-three">
              <a href="#newsletter" className="footer-text">
                Newsletter
              </a>
              <a href="#testimonials" className="footer-text">
                Testimonials
              </a>
            </div>
            <div className="footer-column-four">
              <a href="#navigation" className="footer-text">
                Home
              </a>
              <a href="/about" className="footer-text">
                About
              </a>
              <a href="/product" className="footer-text">
                Products
              </a>
              <a href="/about" className="footer-text">
                Contact Us
              </a>
            </div>
          </div>
          <hr />
          <div className="footer-row-two">
            <a href="https://www.instagram.com/envoy.fiji/">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-facebook-messenger"></i>
            <i className="fa-solid fa-wifi"></i>
            <a href="https://github.com/xdgreat/envoyfijireactproject.git">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
          <div className="footer-row-three">
            <p className="copyright footer-text">
              ©2023 Nikhil Naiker. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
