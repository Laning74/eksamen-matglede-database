import { createContext, useState, useCallback } from "react";
import axios from "axios";

export const foodContext = createContext();

export const AppContext = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [showCategory, setShowCategory] = useState([]);
  // const [items, setItems] = useState([]);
  const [shoppinglist, setShoppinglist] = useState([]);

  const fetchMeals = useCallback((searchMeals) => {
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeals}`
      )
      .then((res) => {
        console.log(res.data.meals);
        setMeals(res.data.meals);
      });
  }, []);

  const fetchRecipes = useCallback((recipeId) => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
      .then((res) => {
        console.log(res.data.meals);
        setRecipes(res.data.meals);
      });
  }, []);

  const fetchClickCategory = useCallback((clickCategory) => {
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${clickCategory}`
      )
      .then((res) => {
        setShowCategory(res.data.meals);
      });
  }, []);

  const addToShoppinList = useCallback((name) => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${name}`)
      .then((name) => {
        setShoppinglist((prevState) => [...prevState, { name }]);
      });
  }, []);

  // const addToShoppinList = (name) => {
  //   setItems((prevState) => [...prevState, { name }]);
  // };

  return (
    <foodContext.Provider
      value={{
        fetchMeals,
        meals,
        fetchRecipes,
        recipes,
        fetchClickCategory,
        showCategory,
        addToShoppinList,
        shoppinglist,
      }}
    >
      {children}
    </foodContext.Provider>
  );
};
