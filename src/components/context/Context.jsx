import { createContext, useState, useCallback } from "react";
import axios from "axios";

export const foodContext = createContext();

export const AppContext = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [category, setCategory] = useState([]);

  const fetchMeals = useCallback((searchMeals) => {
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeals}`
      )
      .then((res) => {
        console.log(res.data.meals);
      });
  }, []);

  return (
    <foodContext.Provider value={{ fetchMeals }}>
      {children}
    </foodContext.Provider>
  );
};
