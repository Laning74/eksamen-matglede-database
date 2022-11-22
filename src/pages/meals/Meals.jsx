import React, { useState, useCallback, useContext } from "react";
import Navbar from "../../components/navBar/NavBar";
import SideBarCategories from "../../components/sideBarCategories/SideBarCategories";
import { foodContext } from "../../components/context/Context";

const Meals = () => {
  const [searchMeals, setSearchMeals] = useState("");

  const { fetchMeals } = useContext(foodContext);

  const handleFetchMeals = useCallback(() => {
    fetchMeals(searchMeals);
  }, [searchMeals, fetchMeals]);

  return (
    <>
      <Navbar />
      <SideBarCategories />
      <div className="meal">
        <div className="search-meals">
          <input
            type="text"
            placeholder="Type the meal name you search for here..."
            value={searchMeals}
            onChange={(e) => setSearchMeals(e.target.value)}
          />
          <button onClick={handleFetchMeals}> Search Meal </button>
        </div>
        <div className="meals-grid"></div>
      </div>
    </>
  );
};

export default Meals;
