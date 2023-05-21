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
              <a href="#motivation">Motivation</a>
              <a href="#fitness">Fitness Hub</a>
              <a href="#history">Our History</a>
            </div>
            <div className="footer-column-three">
              <a href="#newsletter">Newsletter</a>
              <a href="#testimonials">Testimonials</a>
            </div>
            <div className="footer-column-four">
              <a href="/">Home</a>
              <a href="/about">Contact Us</a>
              <a href="">About</a>
              <a href="/product">Products</a>
            </div>
          </div>
          <hr />
          <div className="footer-row-two">
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-facebook-messenger"></i>
            <i class="fa-solid fa-wifi"></i>
          </div>
          <div className="footer-row-three">
            <p className="copyright">©Copyright. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
