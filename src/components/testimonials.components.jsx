import TestimonialsProfile from "./testimonialsprofile.component";
import sarah from "../assets/sarah.jpg";

function Testimonials() {
  return (
    <>
      <h1 className="testimonial-container-title">What Our Customers Say.</h1>
      <div className="testimonials-container">
        <TestimonialsProfile
          name={"Sarah"}
          quote={
            "Thanks to these fitness essentials, I lost 20 pounds and gained confidence like never before!"
          }
          imagesrc={sarah}
        />
        <TestimonialsProfile
          name={"John"}
          quote={
            "These products helped me reach my fitness goals faster than I ever imagined. Highly recommended!"
          }
          imagesrc={sarah}
        />
        <TestimonialsProfile
          name={"Emily"}
          quote={
            "I was skeptical at first, but these fitness essentials completely transformed my workouts. I feel stronger and more motivated than ever."
          }
          imagesrc={sarah}
        />
        <TestimonialsProfile
          name={"Micheal"}
          quote={
            "The quality and effectiveness of these fitness essentials are unmatched. I've seen significant improvements in my performance and overall fitness level."
          }
          imagesrc={sarah}
        />
        <TestimonialsProfile
          name={"Lisa"}
          quote={
            "I struggled with consistency, but these fitness essentials made exercising enjoyable. Now, I look forward to my workouts every day!"
          }
          imagesrc={sarah}
        />
        <TestimonialsProfile
          name={"Alex"}
          quote={
            "I never thought I could achieve my fitness goals until I discovered these incredible products. They exceeded my expectations and gave me the results I wanted."
          }
          imagesrc={sarah}
        />
      </div>
    </>
  );
}

export default Testimonials;
