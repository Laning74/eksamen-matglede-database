import React, { useContext } from "react";
import { foodContext } from "../context/Context";
import { Link } from "react-router-dom";

const CardMeal = () => {
  // console.log(data);
  const { meals, fetchRecipes } = useContext(foodContext);

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
            <img className="image-card" src={meals.strMealThumb} alt="" />
            <h3 className="meals-title">{meals.strMeal}</h3>
            <h4 className="area-title">{meals.strArea} food</h4>
          </Link>
        );
      })}
    </>
  );
};

export default CardMeal;
