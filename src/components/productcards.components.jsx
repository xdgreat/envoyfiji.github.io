function ProductCard({ image, title, description }) {
  return (
    <>
      <div className="product-card">
        <img src={image} alt="" className="image-card"/>
        <div className="description">
          <h1 className="product-title">{title}</h1>
          <p className="product-description">{description}</p>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
