import logo from "../assets/EnvoyFiji.png";
import Searchbar from "./searchbar";
import { Routes, Route, Outlet, Link } from "react-router-dom";
function NavBar() {
  return (
    <>
      <nav className="navigation" id="navigation">
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="" className="logo" loading="lazy" />
          </Link>
        </div>
        <div className="listed-links">
          <Link to="/" className="links">
            Home
          </Link>

          <Link to="/about" className="links">
            About
          </Link>
          <Link to="/product" className="links">
            Product
          </Link>
          <Link to="/cart" className="links">
            <i className="fa-solid fa-cart-shopping shopping-cart"></i>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
