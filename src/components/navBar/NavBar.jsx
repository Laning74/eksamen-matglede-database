// import Logo from "../logo/Logo";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo-tekst">Her kommer logo</h1>
      <div>{/* <Logo /> */}</div>

      <ul className="nav-text-container">
        <Link className="link-text" to="/home">
          <FaHome size={30} />
        </Link>
        <Link className="link-text" to="/home">
          OPPSKRIFTER
        </Link>
        <Link className="link-text" to="/home">
          UKEPLANLEGGER
        </Link>
        <Link className="link-text" to="/home">
          DIN HANDLELISTE
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
