import { useContext, useState, useEffect } from "react";
import { foodContext } from "../../components/context/Context";
import Navbar from "../../components/navBar/NavBar";
import SideBarCategories from "../../components/sideBarCategories/SideBarCategories";

const Recipes = () => {
  const { recipes } = useContext(foodContext);

  return (
    <>
      <header className="header-container">
        <Navbar />
      </header>
      <SideBarCategories />
      <div className="title-container"></div>

      {recipes.map((recipes) => {
        return (
          <div className="grid-section">
            <div className="recipes-container">
              <img
                className="image-recipes"
                src={recipes.strMealThumb}
                alt=""
              />
              <div className="title-area-category" key={recipes.idMeal}>
                <h1 className="title-recipes">{recipes.strMeal}</h1>
                <h2>
                  {recipes.strArea} Food | Category: {recipes.strCategory}
                </h2>
                <div className="ingredient-container">
                  <h3 className="instructions-title">Ingredienser:</h3> <br />
                  <ul className="ingredient">
                    <li>
                      {recipes.strIngredient1} {recipes.strMeasure1}
                      <button>Send til handleliste</button>
                    </li>
                    <br />
                    <li>
                      {recipes.strIngredient2} {recipes.strMeasure2}
                      <button>Send til handleliste</button>
                    </li>
                    <br />
                    {recipes.strIngredient3} {recipes.strMeasure3}
                    <br />
                    {recipes.strIngredient4} {recipes.strMeasure4}
                    <br />
                    {recipes.strIngredient5} {recipes.strMeasure5}
                    <br />
                    {recipes.strIngredient6} {recipes.strMeasure6}
                    <br />
                    {recipes.strIngredient7} {recipes.strMeasure7}
                    <br />
                    {recipes.strIngredient8} {recipes.strMeasure8}
                    <br />
                    {recipes.strIngredient9} {recipes.strMeasure9}
                    <br />
                    {recipes.strIngredient10} {recipes.strMeasure10}
                    <br />
                    {recipes.strIngredient11} {recipes.strMeasure11}
                    <br />
                    {recipes.strIngredient12} {recipes.strMeasure12}
                    <br />
                    {recipes.strIngredient13} {recipes.strMeasure13}
                    <br />
                    {recipes.strIngredient14} {recipes.strMeasure14}
                    <br />
                    {recipes.strIngredient15} {recipes.strMeasure15}
                    <br />
                    {recipes.strIngredient16} {recipes.strMeasure16}
                    <br />
                    {recipes.strIngredient17} {recipes.strMeasure17}
                    <br />
                    {recipes.strIngredient18} {recipes.strMeasure18}
                    <br />
                    {recipes.strIngredient19} {recipes.strMeasure19}
                    <br />
                    {recipes.strIngredient20} {recipes.strMeasure20}
                  </ul>
                </div>
              </div>

              <div className="description">
                <h3 className="instructions-title">Beskrivelse:</h3> <br />
                {recipes.strInstructions}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Recipes;
