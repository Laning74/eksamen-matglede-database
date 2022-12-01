import React, { useContext } from "react";
import { foodContext } from "../context/Context";
import { Link } from "react-router-dom";

const CardCategory = () => {
  const { fetchClickCategory, showCategory, fetchMeals, meals, fetchRecipes } =
    useContext(foodContext);

  return (
    <>
      {meals &&
        showCategory.map((meals) => {
          return (
            <Link
              to={meals.idMeal}
              className="card"
              key={meals.idMeal}
              onClick={() =>
                fetchRecipes(`${meals.idMeal}`) &&
                fetchMeals(`${meals.idMeal}`) &&
                fetchClickCategory(`${meals.idMeal}`)
              }
            >
              <img className="image-card" src={meals.strMealThumb} alt="" />
              <h3 className="meals-title">{meals.strMeal}</h3>
              <h4>{meals.strArea}</h4>
            </Link>
          );
        })}
    </>
  );
};
export default CardCategory;
