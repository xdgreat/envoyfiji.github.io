import React from "react";
import logo from "../assets/EnvoyFiji.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="footer-row-one">
            <div className="footer-column-one">
              <img src={logo} alt="" class="logo" />
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
              <a href="/" className="footer-text">
                Home
              </a>
              <a href="/product" className="footer-text">
                Products
              </a>
              <a href="/about" className="footer-text">
                Contact Us
              </a>
              <a href="" className="footer-text">
                About
              </a>
            </div>
          </div>
          <hr />
          <div className="footer-row-two">
            <a href="https://www.instagram.com/envoy.fiji/">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-facebook-messenger"></i>
            <i class="fa-solid fa-wifi"></i>
            <a href="https://github.com/xdgreat/envoyfijireactproject.git">
              <i class="fa-brands fa-github"></i>
            </a>
          </div>
          <div className="footer-row-three">
            <p className="copyright footer-text">
              ©Copyright. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
