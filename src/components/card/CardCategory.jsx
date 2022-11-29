import React, { useContext } from "react";
import { foodContext } from "../context/Context";

const CardCategory = () => {
  const { fetchClickCategory, showCategory, fetchMeals, meals } =
    useContext(foodContext);
  console.log(showCategory);
  return (
    <>
      {meals &&
        showCategory.map((meals) => {
          return (
            <div
              className="card"
              key={meals.idMeal}
              onClick={() =>
                fetchMeals(`${meals.idMeal}`) &&
                fetchClickCategory(`${meals.idMeal}`)
              }
            >
              <img className="image-card" src={meals.strMealThumb} alt="" />
              <h3>{meals.strMeal}</h3>
              <h4>{meals.strArea}</h4>
            </div>
          );
        })}
    </>
  );
};
export default CardCategory;
