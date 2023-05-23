import "./App.css";
import "./reset.css";
import NavBar from "./components/navbar";
import HeroSection from "./components/herosection";
import ProductGallery from "./components/productgallery";
import FitnessDescription from "./components/fitnessdescription";
import History from "./components/history";
import Testimonials from "./components/testimonials";
import Newsletter from "./components/newsletter";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <FitnessDescription />
      <ProductGallery />
      <History />
      <Newsletter />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
