import "./App.css";
import "./reset.css";
import logo from "./assets/EnvoyFiji.png";
import NavBar from "./components/navbar.components";
import HeroSection from "./components/herosection.components";
import ProductGallery from "./components/productgallery.components";
import FitnessDescription from "./components/fitnessdescription.components";
import History from "./components/history.components";
import Testimonials from "./components/testimonials.components";
import Newsletter from "./components/newsletter.component";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <NavBar/>
      <HeroSection />
      <FitnessDescription/> 
      <ProductGallery/>
      <History/>
      <Newsletter/>
      <Testimonials/>
      <Footer/>
    </>
  );
}

export default App;
