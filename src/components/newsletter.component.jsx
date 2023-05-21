import React from "react";

const Newsletter = () => {
  return (
    <>
      <div className="newsletter-container">
        <div className="newsletter-description">
          <h1 className="newsletter-title">Subscribe to Our Newsletter</h1>
          <p className="newsletter-content">
            Join our newsletter for fitness insights, expert tips, inspiring
            success stories, and exclusive offers. Stay informed, optimize your
            workouts, and be the first to know about new products and events.
            Subscribe now!
          </p>
        </div>
        <div className="newsletter-form">
          <input
            type="text"
            name="Newsletter"
            placeholder="email@example.com"
            className="NewsletterText"
          />
          <button type="submit" className="newsletter-button">Subscribe</button>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
