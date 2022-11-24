import React, { useContext } from "react";
import { foodContext } from "../context/Context";

const Card = ({ data }) => {
  const { fetchMeals, meals } = useContext(foodContext);

  return (
    <>
      {meals.map((meals) => {
        return (
          <div
            className="card"
            key={meals.idMeal}
            onClick={() => fetchMeals(`/${meals.idMeal}`)}
          >
            <img src={meals.strMealThumb} alt="" />
            <h3>{meals.strMeal}</h3>
          </div>
        );
      })}
    </>
  );
};
export default Card;
