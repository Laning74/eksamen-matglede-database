import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const SideBar = () => {
  return (
    <>
      <div className="sidebar-wrapper">
        <ul className="sidebar-list">
          <li className="sidebar-item">
            <Link className="sidebar-link" to="/home">
              <p className="sidebar-text">
                <FaHome size={30} />
                Hjem
              </p>
            </Link>
          </li>

          <li className="sidebar-item">
            <Link to="/persons" className="sidebar-link">
              <p className="sidebar-text">Personer</p>
            </Link>
          </li>

          <li className="sidebar-item">
            <Link to="/addperson" className="sidebar-link">
              <p className="sidebar-text">Legg til person</p>
            </Link>
          </li>

          <li className="sidebar-item">
            <Link to="/cars" className="sidebar-link">
              <p className="sidebar-text">Biler</p>
            </Link>
          </li>

          <li className="sidebar-item">
            <Link to="/addcar" className="sidebar-link">
              <p className="sidebar-text">Legg til bil</p>
            </Link>
          </li>

          <li className="sidebar-item">
            <Link to="/" className="sidebar-link">
              <p className="sidebar-text">Logg ut</p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
