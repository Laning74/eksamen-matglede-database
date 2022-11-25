import React, { useContext } from "react";
import { foodContext } from "../context/Context";

const CardCategory = () => {
  const { fetchClickCategory, showCategory } = useContext(foodContext);
  console.log(showCategory);
  return (
    <>
      {showCategory &&
        showCategory.map((meals) => {
          return (
            <div
              className="card"
              key={meals.idMeal}
              onClick={() => fetchClickCategory(`/${meals.idMeal}`)}
            >
              <img src={meals.strMealThumb} alt="" />
              <h3>{meals.strMeal}</h3>
            </div>
          );
        })}
    </>
  );
};
export default CardCategory;
