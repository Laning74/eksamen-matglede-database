import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { foodContext } from "../context/Context";

const SideBar = () => {
  const { fetchClickCategory } = useContext(foodContext);

  return (
    <>
      <div className="sidebar-wrapper">
        <ul className="sidebar-list">
          <div className="sidebar-item">
            <NavLink to="/category/Beef" className="sidebar-link">
              <p
                onClick={() => fetchClickCategory("Beef")}
                className="sidebar-text"
              >
                Beef
              </p>
            </NavLink>
          </div>

          <div className="sidebar-item">
            <NavLink to="/category/Chicken" className="sidebar-link">
              <p
                onClick={() => fetchClickCategory("Chicken")}
                className="sidebar-text"
              >
                Chicken
              </p>
            </NavLink>
          </div>
          <div className="sidebar-item">
            <NavLink to="/category/Dessert" className="sidebar-link">
              <p
                onClick={() => fetchClickCategory("Dessert")}
                className="sidebar-text"
              >
                Dessert
              </p>
            </NavLink>
          </div>
          <div className="sidebar-item">
            <NavLink to="/category/Lamb" className="sidebar-link">
              <p
                onClick={() => fetchClickCategory("Lamb")}
                className="sidebar-text"
              >
                Lamb
              </p>
            </NavLink>
          </div>
          <div className="sidebar-item">
            <NavLink to="/category/Miscellaneous" className="sidebar-link">
              <p
                onClick={() => fetchClickCategory("Miscellaneous")}
                className="sidebar-text"
              >
                Miscellaneous
              </p>
            </NavLink>
          </div>
          <div className="sidebar-item">
            <NavLink to="/category/Pasta" className="sidebar-link">
              <p
                onClick={() => fetchClickCategory("Pasta")}
                className="sidebar-text"
              >
                Pasta
              </p>
            </NavLink>
          </div>
          <div className="sidebar-item">
            <NavLink to="/category/Pork" className="sidebar-link">
              <p
                onClick={() => fetchClickCategory("Pork")}
                className="sidebar-text"
              >
                Pork
              </p>
            </NavLink>
          </div>
          <div className="sidebar-item">
            <NavLink to="/category/Seafood" className="sidebar-link">
              <p
                onClick={() => fetchClickCategory("Seafood")}
                className="sidebar-text"
              >
                Seafood
              </p>
            </NavLink>
          </div>
          <div className="sidebar-item">
            <NavLink to="/category/Side" className="sidebar-link">
              <p
                onClick={() => fetchClickCategory("Side")}
                className="sidebar-text"
              >
                Side
              </p>
            </NavLink>
          </div>
          <div className="sidebar-item">
            <NavLink to="/category/Starter" className="sidebar-link">
              <p
                onClick={() => fetchClickCategory("Starter")}
                className="sidebar-text"
              >
                Starter
              </p>
            </NavLink>
          </div>

          <li className="sidebar-item">
            <NavLink to="/category/Vegan" className="sidebar-link">
              <p
                onClick={() => fetchClickCategory("Vegan")}
                className="sidebar-text"
              >
                Vegan
              </p>
            </NavLink>
          </li>
          <li className="sidebar-item">
            <NavLink to="/category/Vegetarian" className="sidebar-link">
              <p
                onClick={() => fetchClickCategory("Vegetarian")}
                className="sidebar-text"
              >
                Vegetarian
              </p>
            </NavLink>
          </li>
          <li className="sidebar-item">
            <NavLink to="/category/Breakfast" className="sidebar-link">
              <p
                onClick={() => fetchClickCategory("Breakfast")}
                className="sidebar-text"
              >
                Breakfast
              </p>
            </NavLink>
          </li>
          <li className="sidebar-item">
            <NavLink to="/category/Goat" className="sidebar-link">
              <p
                onClick={() => fetchClickCategory("Goat")}
                className="sidebar-text"
              >
                Goat
              </p>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};
export default SideBar;
