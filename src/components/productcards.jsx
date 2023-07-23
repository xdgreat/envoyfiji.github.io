function ProductCard({ image, title, description }) {
  return (
    <>
      <a href={"/product"} className="product-card">
        <img src={image} alt="" className="image-card" loading="lazy" />
        <div className="description">
          <h1 className="product-title">{title}</h1>
          <p className="product-description">{description}</p>
        </div>
      </a>
    </>
  );
}

export default ProductCard;
