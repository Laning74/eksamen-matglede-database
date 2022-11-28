import { useContext, useState, useEffect } from "react";
import { foodContext } from "../../components/context/Context";
import { useParams } from "react-router-dom";
import Navbar from "../../components/navBar/NavBar";
import SideBarCategories from "../../components/sideBarCategories/SideBarCategories";

const Recipes = (data) => {
  // const [mealsRecipes, setMealsRecipes] = useState([]);
  const { fetchRecipes, recipes, meals } = useContext(foodContext);

  //   const { recipeId } = useParams();
  // const { recipeId } = fetchRecipes();

  //   if (recipeId !== " ") {
  //     fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setMealsRecipes(data.meals[0]);
  //       });
  //   }

  // useEffect(() => {
  //   fetchRecipes();
  // }, [recipes]);
  // setMealsRecipes(data.meals);

  //   //   setMealsRecipes(data.meals);

  return (
    <>
      <h1>Her kommer bilde og oppskrift</h1>
      {recipes.map((recipes) => {
        return (
          <div className="content" key={recipes.idMeal}>
            <img src={recipes.strMealThumb} alt="" />
            <div className="inner-content">
              <h1>{recipes.strMeal}</h1>
              <h2>{recipes.strArea} Food</h2>
              <h3>Category {recipes.strCategory}</h3>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Recipes;
