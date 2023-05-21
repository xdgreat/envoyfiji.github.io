import ProductCard from "./productcards.components";
import gymImage from "../assets/gym.jpg";
import adviceImage from "../assets/advice.jpg";
import recipeImage from "../assets/recipe.jpg";

function ProductGallery() {
  return (
    <>
      <div className="product-container">
        <h1 className="product-gallery-title">Your Fitness Hub</h1>
        <div className="product-gallery">
          <ProductCard
            title={"Fitness Products"}
            description={"Elevate your workouts with quality gear."}
            image={gymImage}
          />
          <ProductCard
            title={"Workout Tips and Advice"}
            description={"Maximize your fitness routine with expert tips."}
            image={adviceImage}
          />
          <ProductCard
            title={"Healthy Recipes"}
            description={"Fuel your fitness journey with delicious recipes."}
            image={recipeImage}
          />
          
          
        </div>
      </div>
    </>
  );
}

export default ProductGallery;
