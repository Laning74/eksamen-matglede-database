import React, { useState, useCallback, useEffect, useContext } from "react";
import Navbar from "../../components/navBar/NavBar";
import CardMeal from "../../components/card/CardMeal";
import SideBarCategories from "../../components/sideBarCategories/SideBarCategories";
import { foodContext } from "../../components/context/Context";

const Meals = () => {
  const [searchMeals, setSearchMeals] = useState("");

  const { fetchMeals, meals } = useContext(foodContext);

  const handleFetchMeals = useCallback(() => {
    fetchMeals(searchMeals);
  }, [searchMeals, fetchMeals]);

  return (
    <>
      <header className="header-container">
        <Navbar />
      </header>
      <SideBarCategories />
      <div className="search-meals-container">
        <h1 className="meals-title">Søk etter dine favorittoppskrifter!</h1>

        <div className="search-meals">
          <input
            type="text"
            placeholder="Type the meal name you search for here..."
            value={searchMeals}
            onChange={(e) => setSearchMeals(e.target.value)}
          />
          <button onClick={handleFetchMeals}> Search Meal </button>
        </div>
      </div>

      <div className="meals-container">
        {meals ? (
          <CardMeal />
        ) : (
          <h2>No meals with that name in the database, try again!</h2>
        )}
      </div>
    </>
  );
};

export default Meals;
