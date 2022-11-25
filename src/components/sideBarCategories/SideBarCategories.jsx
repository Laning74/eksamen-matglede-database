import React, { useContext, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { foodContext } from "../context/Context";

const SideBar = () => {
  // const [clickCategory, setClickCategory] = useState("");
  const { fetchClickCategory } = useContext(foodContext);

  const handleFetchClickcategory = useCallback(
    (clickCategory) => {
      fetchClickCategory(clickCategory);
    },
    [fetchClickCategory]
  );
  // console.log(showCategory);

  return (
    <>
      <div className="sidebar-wrapper">
        <ul className="sidebar-list">
          <li className="sidebar-item">
            <Link to="/category/Beef" className="sidebar-link">
              <p
                onClick={() => handleFetchClickcategory("Beef")}
                className="sidebar-text"
              >
                Beef
              </p>
            </Link>
          </li>

          <li className="sidebar-item">
            <Link to="/category/Chicken" className="sidebar-link">
              <p
                onClick={() => fetchClickCategory("Chicken")}
                className="sidebar-text"
              >
                Chicken
              </p>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="/category/Dessert" className="sidebar-link">
              <p className="sidebar-text">Dessert</p>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="/category/Lamb" className="sidebar-link">
              <p className="sidebar-text">Lamb</p>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="/category/Miscellaneous" className="sidebar-link">
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
            <Link to="/category/Pork" className="sidebar-link">
              <p className="sidebar-text">Seafood</p>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="/category/Side" className="sidebar-link">
              <p className="sidebar-text">Side</p>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="/category/Starter" className="sidebar-link">
              <p className="sidebar-text">Starter</p>
            </Link>
          </li>

          <li className="sidebar-item">
            <Link to="/category/Vegan" className="sidebar-link">
              <p className="sidebar-text">Vegan</p>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="/category/Vegetarian" className="sidebar-link">
              <p className="sidebar-text">Vegetarian</p>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="/category/Breakfast" className="sidebar-link">
              <p className="sidebar-text">Breakfast</p>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="/category/Goat" className="sidebar-link">
              <p className="sidebar-text">Goat</p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
export default SideBar;
