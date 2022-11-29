import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { foodContext } from "../context/Context";
import { useContext } from "react";
import Logo from "../../../src/logo/Logo Matglede white.png";

const Navbar = () => {
  const { shoppinglist } = useContext(foodContext);

  return (
    <nav className="navbar">
      <NavLink to="/">
        <img className="logo" src={Logo} alt="Matglede logo" />
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

        <NavLink className="link-text" to="/shoppinglist">
          DIN HANDLELISTE
          <span> ({shoppinglist.length})</span>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
