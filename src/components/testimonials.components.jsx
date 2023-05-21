import TestimonialsProfile from "./testimonialsprofile.component";
import shahaanxshane from '../assets/shahaanxshane.jpg'
import sarah from "../assets/sarah.jpg";
import ridi from "../assets/ridi.jpg"
import waji from "../assets/waji.jpg"
import jas from "../assets/jas.png"

function Testimonials() {
  return (
    <>
      <h1 className="testimonial-container-title">What Our Customers Say.</h1>
      <div className="testimonials-container">
        <TestimonialsProfile
          name={"Shane & Shahaan"}
          quote={
            "As a gym couple the program has benefited alot into our relationship which has become less abusive and more healthy and loving."
          }
          imagesrc={shahaanxshane}
        />
        <TestimonialsProfile
          name={"Riddhi"}
          quote={
            "These products helped me reach my fitness goals faster than I ever imagined. Highly recommended!"
          }
          imagesrc={ridi}
        />
        <TestimonialsProfile
          name={"Waji"}
          quote={
            "I was skeptical at first, but these fitness essentials completely transformed my workouts. I feel stronger and more motivated than ever."
          }
          imagesrc={waji}
        />
        <TestimonialsProfile
          name={"Jasnil"}
          quote={
            "The quality and effectiveness of these fitness essentials are unmatched. I've seen significant improvements in my performance and overall fitness level."
          }
          imagesrc={jas}
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
