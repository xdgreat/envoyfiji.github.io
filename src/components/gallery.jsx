import React from "react";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";
import gallery4 from "../assets/gallery4.jpg";
import gallery5 from "../assets/gallery5.jpg";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState();

  function handleChange(index) {
    setCurrentIndex(index);
  }

  const picturePaths = [gallery1, gallery2, gallery3, gallery4, gallery5];

  const renderSlides = picturePaths.map((picture, index) => {
    return <img src={picture} key={index} className="pictures" />;
  });
  return (
    <>
      <div className="gallery">
        <Carousel
          showArrows={false}
          autoPlay={true}
          infiniteLoop={true}
          selectedItem={picturePaths[currentIndex]}
          onChange={handleChange}
          className="carousel-container"
          
        >
          {renderSlides}
        </Carousel>
      </div>
    </>
  );
};

export default Gallery;
