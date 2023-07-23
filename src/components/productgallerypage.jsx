import React from "react";
import ProductImgCard from "./ProductImgCard";
import watch1 from "../assets/watch1.jpg";
import watch2 from "../assets/watch2.jpg";
import resistanceband from "../assets/resistanceband.jpg";
import book1 from "../assets/book1.jpg";
import book2 from "../assets/book2.jpg";
import book3 from "../assets/book3.jpg";
import book4 from "../assets/book4.jpg";
import book5 from "../assets/book5.jpg";
import book6 from "../assets/book6.jpg";

const Productgallerypage = () => {
  return (
    <div className="product-gallery-page">
      <h1 className="product-page-title">Fitness Products</h1>
      <div className="product-container">
        <ProductImgCard
          title={"Amazfit Band 5"}
          price={"$39.99"}
          imgSrc={watch1}
        />
        <ProductImgCard
          title={"Amazfit Bip U"}
          price={"$59.99"}
          imgSrc={watch2}
        />
        <ProductImgCard
          title={"Black Mountain Products Resistance Band Set "}
          price={"$24.68"}
          imgSrc={resistanceband}
        />
      </div>
      <h1>Workout Tips and Advice</h1>
      <div className="product-container">
        <ProductImgCard
          title={"Science of Strength Training"}
          price={"$15.22"}
          imgSrc={book1}
        />
        <ProductImgCard
          title={"Bigger Leaner Stronger"}
          price={"$11.98"}
          imgSrc={book2}
        />
        <ProductImgCard
          title={"New Anatomy for Strength & Fitness Training"}
          price={"$16.56"}
          imgSrc={book3}
        />
      </div>
      <h1>Healthy Recipes</h1>
      <div className="product-container">
        <ProductImgCard
          title={"The Complete Cookbook for Young Chefs"}
          price={"$17.34 "}
          imgSrc={book4}
        />
        <ProductImgCard
          title={"The Complete Baking Book for Young Chefs"}
          price={"$19.28 "}
          imgSrc={book5}
        />
        <ProductImgCard
          title={"The Big Cookbook for Teen Chefs"}
          price={"$13.10 "}
          imgSrc={book6}
        />
      </div>
    </div>
  );
};

export default Productgallerypage;
