function HeroSection() {
  return (
    <>
      <div className="hero">
        <div className="hero-center-container">
          <h1 className="hero-title">Elevate Your Fitness Journey</h1>
          <p className="hero-description">
            Discover top-quality fitness equipment and accessories to help you
            reach your goals. Shop now and elevate your fitness game.
          </p>
          <div className="hero-buttons">
            <a href="/product" className="hero-link link-one">
              Explore.
            </a>
            <a href="/about" className="hero-link link-two">
              Learn More.
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
