import React from "react";

function TestimonialsProfile({ name, quote, imagesrc,age }) {
  return (
    <>
      <div className="testimonial-profile" id="profile">
        <img src={imagesrc} alt="" className="testimonial-image" />
        <div className="testimonial-content">
          <h1 className="testimonial-name">{name} <span className="age">{age}</span> </h1>
          <p className="testimonial-quote">{quote}</p>
        </div>
      </div>
    </>
  );
}

export default TestimonialsProfile;
