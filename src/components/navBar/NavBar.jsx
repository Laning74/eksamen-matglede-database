import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { foodContext } from "../context/Context";
import { useContext, useState, useEffect } from "react";
import Logo from "../../../src/logo/Logo Matglede white.png";
import ShoppingList from "../shoppingList/ShoppingList";

const Navbar = () => {
  const [shoppingListOpen, setShoppingListOpen] = useState(false);
  // const [myShoppingList, setMyShoppingList] = useState([]);

  // let myShoppingList = [];

  const {
    shoppingList,
    fetchRandomMeal,
    randomMeal,
    setRecipes,
    setShoppingList,
    recipes,
  } = useContext(foodContext);

  // function handleSetShoppingList(recipes) {
  //   setRecipes(recipes);
  //   localStorage.setItem("recipes", recipes);
  // }

  // useEffect(() => {
  //   localStorage.setItem("recipes", JSON.stringify(recipes));
  //   console.log(recipes);
  // }, [recipes]);

  // console.log(recipes);

  const togglePopup = () => {
    setShoppingListOpen(!shoppingListOpen);
  };
  // handleSetShoppingList(shoppingList);

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
          // onChange={(e) => handleSetShoppingList(e.myShoppingList)}
        >
          DIN HANDLELISTE
          <span> ({shoppingList.length})</span>
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
