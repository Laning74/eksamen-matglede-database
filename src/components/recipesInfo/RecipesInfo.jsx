import { useContext } from "react";
import { foodContext } from "../../components/context/Context";
import PrimaryButton from "../../components/primaryButton/PrimaryButton";

const RecipesInfo = () => {
  const { recipes, addToShoppinList } = useContext(foodContext);

  return (
    <>
      {recipes &&
        recipes.map((recipes) => {
          return (
            <div className="flex-section">
              <div className="recipes-container">
                <img
                  key={recipes.strMealThumb}
                  className="image-recipes"
                  src={recipes.strMealThumb}
                  alt=""
                />
                <div className="title-area-category">
                  <h1 className="title-recipes">{recipes.strMeal}</h1>
                  <h2>
                    {recipes.strArea} Food | Category: {recipes.strCategory}
                  </h2>
                  <div className="ingredient-container">
                    <h3 className="instructions-title">Ingredienser:</h3> <br />
                    <ul className="ingredient" key={recipes.idMeal}>
                      <div className="column-1">
                        <li>
                          {recipes.strIngredient1} {recipes.strMeasure1}
                        </li>
                        <li>
                          {recipes.strIngredient2} {recipes.strMeasure2}
                        </li>
                        <li>
                          {recipes.strIngredient3} {recipes.strMeasure3}
                        </li>
                        <li>
                          {recipes.strIngredient4} {recipes.strMeasure4}
                        </li>
                        <li>
                          {recipes.strIngredient5} {recipes.strMeasure5}
                        </li>
                        <li>
                          {recipes.strIngredient6} {recipes.strMeasure6}
                        </li>
                        <li>
                          {recipes.strIngredient7} {recipes.strMeasure7}
                        </li>
                        <li>
                          {recipes.strIngredient8} {recipes.strMeasure8}
                        </li>
                        <li>
                          {recipes.strIngredient9} {recipes.strMeasure9}
                        </li>
                        <li>
                          {recipes.strIngredient10} {recipes.strMeasure10}
                        </li>
                      </div>
                      <div className="column-2">
                        <li>
                          {recipes.strIngredient11} {recipes.strMeasure11}
                        </li>
                        <li>
                          {recipes.strIngredient12} {recipes.strMeasure12}
                        </li>
                        <li>
                          {recipes.strIngredient13} {recipes.strMeasure13}
                        </li>
                        <li>
                          {recipes.strIngredient14} {recipes.strMeasure14}
                        </li>
                        <li>
                          {recipes.strIngredient15} {recipes.strMeasure15}
                        </li>
                        <li>
                          {recipes.strIngredient16} {recipes.strMeasure16}
                        </li>
                        <li>
                          {recipes.strIngredient17} {recipes.strMeasure17}
                        </li>
                        <li>
                          {recipes.strIngredient18} {recipes.strMeasure18}
                        </li>
                        <li>
                          {recipes.strIngredient19} {recipes.strMeasure19}
                        </li>
                        <li>
                          {recipes.strIngredient20} {recipes.strMeasure20}
                        </li>
                      </div>
                    </ul>
                    <PrimaryButton
                      onClick={() => addToShoppinList(recipes)}
                      text={"Send til handleliste"}
                    />
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

export default RecipesInfo;
