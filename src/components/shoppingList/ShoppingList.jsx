import React from "react";
import { useContext } from "react";
import { foodContext } from "../../components/context/Context";

function ShoppingList(props) {
  const { recipes } = useContext(foodContext);

  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        {props.content}

        {recipes.map((recipes, index) => (
          <div key={index}>
            <h2 className="title-recipes">{recipes.strMeal}</h2>
            <div className="ingrediens-recipes">
              <h4>{recipes.strIngredient1}</h4>
              <h4>{recipes.strIngredient2}</h4>
              <h4>{recipes.strIngredient3}</h4>
              <h4>{recipes.strIngredient4}</h4>
              <h4>{recipes.strIngredient5}</h4>
              <h4>{recipes.strIngredient6}</h4>
              <h4>{recipes.strIngredient7}</h4>
              <h4>{recipes.strIngredient8}</h4>
              <h4>{recipes.strIngredient9}</h4>
              <h4>{recipes.strIngredient10}</h4>
              <h4>{recipes.strIngredient11}</h4>
              <h4>{recipes.strIngredient12}</h4>
              <h4>{recipes.strIngredient13}</h4>
              <h4>{recipes.strIngredient14}</h4>
              <h4>{recipes.strIngredient15}</h4>
              <h4>{recipes.strIngredient16}</h4>
              <h4>{recipes.strIngredient17}</h4>
              <h4>{recipes.strIngredient18}</h4>
              <h4>{recipes.strIngredient19}</h4>
              <h4>{recipes.strIngredient20}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShoppingList;
