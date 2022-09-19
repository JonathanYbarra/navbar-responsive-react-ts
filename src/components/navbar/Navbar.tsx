import iconMenu from "../../assets/menu.svg";
import logo from "../../assets/logo.svg";
import { NavbarItem } from "./NavbarItem";
import { useNavbarContext } from "./context/navbar.context";

export const Navbar = () => {
  const { toggleMenu, showMenu } = useNavbarContext();
  return (
    <header className="navbar-container">
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" /> 
          <strong>Logo</strong>
        </div>

        <button className="mobile-menu" onClick={toggleMenu}>
          <img src={iconMenu} alt="menu" />
        </button>

        <ul className={`nav-menu ${!showMenu && "hide-menu"}`}>
          <NavbarItem to="/home">Home</NavbarItem>

          <NavbarItem to="/aboutme">About me</NavbarItem>

          <NavbarItem to="/contactme">Contact me</NavbarItem>

        </ul>
      </nav>
    </header>
  );
};

// {} [] !== => >=