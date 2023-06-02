// import testimonialsData from "../testimonialsData.json";
import TestimonialsProfile from "./testimonialsprofile";
import shane from "../assets/shahaanxshane.jpg";
import ridi from "../assets/ridi.jpg";
import waji from "../assets/waji.jpg";
import jas from "../assets/jas.png";
import nitij from "../assets/nitij.jpg";
import abinash from "../assets/abinash.jpg";
import annsh from "../assets/annsh.jpg";
import zeno from "../assets/zeno.jpg";
import nicole from "../assets/nicole.jpg"

function Testimonials() {
  const testimonialData = [
    {
      name: "Sharad & Shahaan",
      quote:
        "As a gym couple the program has benefited alot into our relationship which has become less abusive and more healthy and loving.",
      imagesrc: shane,
    },
    {
      name: "Riddhi Bharat",
      quote:
        "I just received this 20kg bar gym equipment thing but i genuinely can not lift it to save my life but maybe im just a moron who doesnt know how to use gym equipments.",
      imagesrc: ridi,
    },
    {
      name: "Waji Munshi",
      quote:
        "I was new to the gym and looking for a reliable website that sold me honest to god products, i still haven't found one yet.",
      imagesrc: waji,
    },
    {
      name: "Jasnil Singh",
      quote: "I'm not funny i'm just always silly and people think i'm joking",
      imagesrc: jas,
    },
    {
      name: "Nitij Shankar",
      quote:
        "I love gyming and was looking for a solid site to promote my program, safe to say i'm still in search :D",
      imagesrc: nitij,
    },
    {
      name: "Abinash Rout",
      quote:
        "Thanks to this program I am literally Batman now. I can finally save the city. I am vengeance.",
      imagesrc: abinash,
    },
    {
      name: "Annsh Naidu",
      quote:
        "Thanks to this website, I was able to find good fish and chips in my area.",
      imagesrc: annsh,
    },
    {
      name: "Zenoabia Benazir",
      quote: "Bless this fitness program, I ain't lazy anymore (I still am)",
      imagesrc: zeno,
    },

    // {
    //   name: "Nicole Singh",
    //   quote: "I love Nikhil.",
    //   imagesrc: nicole,
    // },
  ];

  return (
    <>
      <h1 className="testimonial-container-title" id="testimonials">
        What Our Customers Say.
      </h1>
      <div className="testimonials-container">
        {testimonialData.map((testimonial, index) => (
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
