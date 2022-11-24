import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <div className="sidebar-wrapper">
        <ul className="sidebar-list">
          <li className="sidebar-item">
            <Link className="sidebar-link" to="/category">
              <p className="sidebar-text">Beef </p>
            </Link>
          </li>

          <li className="sidebar-item">
            <Link to="/category" className="sidebar-link">
              <p className="sidebar-text">Chicken</p>
            </Link>
          </li>

          <li className="sidebar-item">
            <Link to="/category" className="sidebar-link">
              <p className="sidebar-text">Dessert</p>
            </Link>
          </li>

          <li className="sidebar-item">
            <Link to="/category" className="sidebar-link">
              <p className="sidebar-text">Lamp</p>
            </Link>
          </li>

          <li className="sidebar-item">
            <Link to="/category" className="sidebar-link">
              <p className="sidebar-text">Miscellaneous</p>
            </Link>
          </li>

          <li className="sidebar-item">
            <Link to="/category" className="sidebar-link">
              <p className="sidebar-text">Pasta</p>
            </Link>
          </li>

          <li className="sidebar-item">
            <Link to="/category" className="sidebar-link">
              <p className="sidebar-text">Pork</p>
            </Link>
          </li>

          <li className="sidebar-item">
            <Link to="/category" className="sidebar-link">
              <p className="sidebar-text">Seafood</p>
            </Link>
          </li>

          <li className="sidebar-item">
            <Link to="/category" className="sidebar-link">
              <p className="sidebar-text">Side</p>
            </Link>
          </li>

          <li className="sidebar-item">
            <Link to="/category" className="sidebar-link">
              <p className="sidebar-text">Starter</p>
            </Link>
          </li>

          <li className="sidebar-item">
            <Link to="/category" className="sidebar-link">
              <p className="sidebar-text">Starter</p>
            </Link>
          </li>

          <li className="sidebar-item">
            <Link to="/category" className="sidebar-link">
              <p className="sidebar-text">Vegan</p>
            </Link>
          </li>

          <li className="sidebar-item">
            <Link to="/category" className="sidebar-link">
              <p className="sidebar-text">Vegetarian</p>
            </Link>
          </li>

          <li className="sidebar-item">
            <Link to="/category" className="sidebar-link">
              <p className="sidebar-text">Breakfast</p>
            </Link>
          </li>

          <li className="sidebar-item">
            <Link to="/category" className="sidebar-link">
              <p className="sidebar-text">Goat</p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
