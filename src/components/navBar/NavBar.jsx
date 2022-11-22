// import Logo from "../logo/Logo";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Her kommer logo</h1>
      <Link className="sidebar-link" to="/home">
        <p className="sidebar-text">
          <FaHome size={30} />
          Hjem
        </p>
      </Link>
      <div>{/* <Logo /> */}</div>
    </nav>
  );
};

export default Navbar;
