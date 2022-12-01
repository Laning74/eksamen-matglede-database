import React, { useContext } from "react";
import Navbar from "../../components/navBar/NavBar";
import PrimaryButtonSmall from "../../components/primaryButton/PrimaryButtonSmall";
import { foodContext } from "../../components/context/Context";
import SideBarCategories from "../../components/sideBarCategories/SideBarCategories";

function Dagens() {
  const { fetchRandomMeal, randomMeal } = useContext(foodContext);

  return (
    <>
      <header className="header-container">
        <Navbar />
      </header>
      <SideBarCategories />
      <div className="title-container">
        <h1 className="dagens-title">Dagens TA SJANSEN måltid!</h1>
      </div>

      {randomMeal &&
        randomMeal.map((randomMeal, index) => {
          return (
            <div className="dagens-flex-section" key={index}>
              <div className="recipes-container">
                <img
                  className="image-recipes"
                  src={randomMeal.strMealThumb}
                  alt=""
                />
                <div className="title-area-category" key={randomMeal.idMeal}>
                  <h1 className="title-recipes">{randomMeal.strMeal}</h1>
                  <h2>
                    {randomMeal.strArea} Food | Category:{" "}
                    {randomMeal.strCategory}
                  </h2>
                  <div className="ingredient-container">
                    <h3 className="instructions-title">Ingredienser:</h3> <br />
                    <ul className="ingredient">
                      <div className="column-1">
                        <li>
                          {randomMeal.strIngredient1} {randomMeal.strMeasure1}
                        </li>
                        <li>
                          {randomMeal.strIngredient2} {randomMeal.strMeasure2}
                        </li>
                        <li>
                          {randomMeal.strIngredient3} {randomMeal.strMeasure3}
                        </li>
                        <li>
                          {randomMeal.strIngredient4} {randomMeal.strMeasure4}
                        </li>
                        <li>
                          {randomMeal.strIngredient5} {randomMeal.strMeasure5}
                        </li>
                        <li>
                          {randomMeal.strIngredient6} {randomMeal.strMeasure6}
                        </li>
                        <li>
                          {randomMeal.strIngredient7} {randomMeal.strMeasure7}
                        </li>
                        <li>
                          {randomMeal.strIngredient8} {randomMeal.strMeasure8}
                        </li>
                        <li>
                          {randomMeal.strIngredient9} {randomMeal.strMeasure9}
                        </li>
                        <li>
                          {randomMeal.strIngredient10} {randomMeal.strMeasure10}
                        </li>
                      </div>
                      <div className="column-2">
                        <li>
                          {randomMeal.strIngredient11} {randomMeal.strMeasure11}
                        </li>
                        <li>
                          {randomMeal.strIngredient12} {randomMeal.strMeasure12}
                        </li>
                        <li>
                          {randomMeal.strIngredient13} {randomMeal.strMeasure13}
                        </li>
                        <li>
                          {randomMeal.strIngredient14} {randomMeal.strMeasure14}
                        </li>
                        <li>
                          {randomMeal.strIngredient15} {randomMeal.strMeasure15}
                        </li>
                        <li>
                          {randomMeal.strIngredient16} {randomMeal.strMeasure16}
                        </li>
                        <li>
                          {randomMeal.strIngredient17} {randomMeal.strMeasure17}
                        </li>
                        <li>
                          {randomMeal.strIngredient18} {randomMeal.strMeasure18}
                        </li>
                        <li>
                          {randomMeal.strIngredient19} {randomMeal.strMeasure19}
                        </li>
                        <li>
                          {randomMeal.strIngredient20} {randomMeal.strMeasure20}
                        </li>
                      </div>
                    </ul>
                    <PrimaryButtonSmall
                      onClick={() => fetchRandomMeal(randomMeal)}
                      className="ta-sjansen-btn"
                      text={"Prøv igjen!"}
                    />
                  </div>
                </div>

                <div className="description">
                  <h3 className="instructions-title">Beskrivelse:</h3> <br />
                  {randomMeal.strInstructions}
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default Dagens;
