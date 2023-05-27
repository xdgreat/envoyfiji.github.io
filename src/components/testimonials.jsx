import testimonialsData from "../testimonialsData.json";
import TestimonialsProfile from "./testimonialsprofile";


function Testimonials() {
  return (
    <>
      <h1 className="testimonial-container-title" id="testimonials">
        What Our Customers Say.
      </h1>
      <div className="testimonials-container">
        {testimonialsData.map((testimonial, index) => (
          <TestimonialsProfile
            key={index}
            name={testimonial.name}
            quote={testimonial.quote}
            imagesrc={testimonial.imagesrc}
          />
        ))}
      </div>
    </>
  );
}

export default Testimonials;
