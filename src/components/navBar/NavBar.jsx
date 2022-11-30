import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { foodContext } from "../context/Context";
import { useContext, useState } from "react";
import Logo from "../../../src/logo/Logo Matglede white.png";
import ShoppingList from "../shoppingList/ShoppingList";

const Navbar = () => {
  const [shoppingListOpen, setShoppingListOpen] = useState(false);
  const { shoppinglist, fetchRandomMeal, randomMeal } = useContext(foodContext);

  const togglePopup = () => {
    setShoppingListOpen(!shoppingListOpen);
  };

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

        <NavLink
          className="link-text"
          to="/dagens"
          onClick={() => fetchRandomMeal(randomMeal)}
        >
          DAGENS TA SJANSEN
        </NavLink>

        <NavLink
          className="link-text"
          type="button"
          value="Click to Open Popup"
          onClick={togglePopup}
        >
          DIN HANDLELISTE
          <span> ({shoppinglist.length})</span>
          {shoppingListOpen && (
            <ShoppingList
              content={
                <>
                  <h1 className="shoppinglist-title">DIN HANDLELISTE</h1>
                </>
              }
              handleClose={togglePopup}
            />
          )}
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
