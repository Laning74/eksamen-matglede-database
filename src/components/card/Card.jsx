import React, { useContext } from "react";
// import { useNavigate } from "react-router-dom";
import { foodContext } from "../context/Context";

const Card = ({ data }) => {
  console.log(data);

  const { fetchCategory, category } = useContext(foodContext);

  return (
    <>
      {category.map((categories) => {
        return (
          <div
            className="card"
            key={categories.idCategory}
            onClick={() => fetchCategory(`/${categories.idCategory}`)}
          >
            <img src={categories.strCategoryThumb} alt="" />
            <h3>{categories.strCategory}</h3>
          </div>
        );
      })}
    </>
  );
};
export default Card;
