import TestimonialsProfile from "./testimonialsprofile.component";
import shahaanxshane from '../assets/shahaanxshane.jpg'
import sarah from "../assets/sarah.jpg";
import ridi from "../assets/ridi.jpg"
import waji from "../assets/waji.jpg"
import jas from "../assets/jas.png"
import nitij from "../assets/nitij.jpg"
import aroush from "../assets/aroush.jpg"

function Testimonials() {
  return (
    <>
      <h1 className="testimonial-container-title" id="testimonials">What Our Customers Say.</h1>
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
            "I was new to the gym and looking for a reliable website that sold me honest to god products, i still haven't found one yet."
          }
          imagesrc={waji}
        />
        <TestimonialsProfile
          name={"Jasnil"}
          quote={
            "I'm not funny i'm just always silly and people think i'm joking"
          }
          imagesrc={jas}
        />
        <TestimonialsProfile
          name={"Nitij"}
          quote={
            "I love gyming and was looking for a solid site to promote my program, safe to say i'm still in search :D"
          }
          imagesrc={nitij}
        />
        <TestimonialsProfile
          name={"Aroush"}
          quote={
            "Thanks to this program I am literally Batman now. I can finally save the city. I am vengeance."
          }
          imagesrc={aroush}
        />
      </div>
    </>
  );
}

export default Testimonials;
