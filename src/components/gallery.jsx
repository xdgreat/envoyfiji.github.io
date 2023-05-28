import React from "react";

const Gallery = () => {
  const slideShowData = [
    {
      image: "../dist/assets/gallery1-1318a087.jpg",
    },
    {
      image: "./assets/gallery2.jpg",
    },
    {
      image: "./assets/gallery3.jpg",
    },
    {
      image: "./assets/gallery4.jpg",
    },
    {
      image: "./assets/gallery5.jpg",
    },
  ];

  return (
    <>
      <div className="gallery">
        {slideShowData.map((pictures,index)=>{
          return <img src={pictures.image} key={index} />
        })}
      </div>
    </>
  );
};

export default Gallery;
