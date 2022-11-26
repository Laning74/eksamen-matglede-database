// import Logo from "../logo/Logo";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import Logo from "../../../src/logo/Logo Matglede white.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink className="logo" to="/">
        <img src={Logo} alt="Matglede logo" />
      </NavLink>

      <ul className="nav-text-container">
        <NavLink className="link-text" to="/">
          <FaHome size={30} />
        </NavLink>

        <NavLink className="link-text" to="/meals">
          OPPSKRIFTER
        </NavLink>

        <NavLink className="link-text" to="/home">
          UKEPLANLEGGER
        </NavLink>

        <NavLink className="link-text" to="/home">
          DIN HANDLELISTE
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
