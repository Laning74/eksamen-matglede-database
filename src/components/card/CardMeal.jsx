import React, { useContext } from "react";
import { foodContext } from "../context/Context";
import { Link } from "react-router-dom";

const Card = () => {
  // console.log(data);
  const { fetchMeals, meals, fetchRecipes } = useContext(foodContext);

  return (
    <>
      {meals.map((meals) => {
        return (
          <Link
            to={meals.idMeal}
            className="card"
            key={meals.idMeal}
            onClick={() => fetchRecipes(`${meals.idMeal}`)}
          >
            <img src={meals.strMealThumb} alt="" />
            <h3>{meals.strMeal}</h3>
          </Link>
        );
      })}
    </>
  );
};

export default Card;
