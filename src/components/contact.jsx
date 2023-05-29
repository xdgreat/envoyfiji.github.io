import React from "react";
import Maps from "./maps";

const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <div className="contact-flex-container">
          <div className="contact-column-one">
            <div className="contact-column-one-content">
              <h1 className="contact-title">Contact Us! </h1>
              <p className="contact-description">
                Hello! We appreciate your interest in getting to know us better!
              </p>
            </div>
            <form className="contact-form">
              <input
                type="text"
                className="FName textbox"
                placeholder="First Name"
              />
              <input
                type="text"
                className="LName textbox"
                placeholder="Last Name"
              />
              <input type="text" className="Mail textbox" placeholder="Email" />
              <input
                type="text"
                className="Phone textbox"
                placeholder="Phone"
              />
              <textarea
                placeholder="Message"
                className="Message textbox"
              ></textarea>
              <button type="submit" className="submit">
                Submit
              </button>
            </form>
          </div>
          <div className="contact-column-two">
            <h1 className="contact-information">
              Contact Information <i className="fa-solid fa-link-slash"></i>{" "}
            </h1>
            <p className="address">
              123 Main Street. <br /> Suva. 23456. <br /> Fiji Islands.
            </p>
            <p className="call-us">Call Us: +679 999 3344</p>
            <p className="hours">
              We are open from Monday to Friday 08:00am-05:00pm
            </p>
            <Maps />
            <div className="socials">
              <h1 className="social-title">Follow Us</h1>
              <p className="social-links">
                <a href="#">Facebook</a> <a href="#">Instagram</a>{" "}
                <a href="#">Twitter</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
