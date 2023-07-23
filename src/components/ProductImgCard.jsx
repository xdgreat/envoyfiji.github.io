import React from "react";

const ProductImgCard = ({ imgSrc, title, price }) => {
  return (
    <div className="product-img-card">
      <img src={imgSrc} alt="" />
      <h3 className="product-price">{price}</h3>
      <h4 className="product-title">{title}</h4>
    </div>
  );
};

export default ProductImgCard;
