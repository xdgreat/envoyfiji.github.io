import logo from "../assets/EnvoyFiji.png";
import Searchbar from "./searchbar";
function NavBar() {
  return (
    <>
      <nav className="navigation">
        <div className="logo-container">
          <a href="">
            <img src={logo} alt="" className="logo" />
          </a>
        </div>
        <Searchbar />
        <div className="listed-links">
          <a href="/" className="links">
            Home
          </a>

          <a href="/about" className="links">
            About
          </a>
          <a href="/product" className="links">
            Product
          </a>
          <a href="" className="links">
            <i class="fa-solid fa-cart-shopping shopping-cart"></i>
          </a>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
