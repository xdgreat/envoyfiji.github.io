import React from "react";
import shahil from "../assets/shahil.png";

const HistoryAbout = () => {
  return (
    <>
      <div className="about-page-container">
        <div className="owners-quote">
          <h1>Transforming lives through fitness and wellness.</h1>
        </div>
        <div className="about-page-content">
          <img src={shahil} className="owners-picture" />
          <div className="about-paragraphs">
            <p>
             <strong>We</strong> are a renowned fitness brand with a rich history dating back to
              1968. For over five decades, we have been dedicated to helping
              individuals achieve their health and fitness goals through our
              exceptional products and services. <strong>Envoy Fiji</strong> was founded by
              fitness enthusiasts who recognized the transformative power of
              exercise and its positive impact on overall well-being. <br /> <br /> What
              started as a small fitness center in the heart of Fiji has now
              grown into a global brand known for its commitment to excellence.
              Throughout the years, we have continuously evolved and adapted to
              the changing fitness landscape, staying at the forefront of
              industry trends and innovations. Our team of experts and fitness
              professionals have worked tirelessly to curate a collection of
              top-quality fitness essentials that cater to all fitness levels
              and aspirations.
            </p>
            <p>
              At <strong>Envoy Fiji</strong> , we firmly believe that fitness is not just a
              physical endeavor but a lifestyle. We strive to inspire and
              empower individuals to take control of their health, enhance their
              performance, and unlock their full potential. Whether you're a
              seasoned athlete or just starting your fitness journey, we are
              here to support and guide you every step of the way.J oin the
              <strong>Envoy Fiji</strong> community and experience the difference that
              dedication, passion, and quality can make in achieving your
              fitness goals.  <br /> <br />  Together, let's embark on a journey of fitness,
              well-being, and self-discovery. We thank you for choosing Envoy
              Fiji as your trusted partner in fitness. Here's to a healthier,
              happier, and more fulfilling life! Feel free to adjust and modify
              the content as per your requirements.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HistoryAbout;
