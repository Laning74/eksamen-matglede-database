import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Meals from "./pages/meals/Meals";
import Category from "./pages/category/Category";
import Recipes from "./pages/recipes/Recipes";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meals" element={<Meals />} />
        <Route path="/category/:type" element={<Category />} />
        <Route path="/meals/:recipeId" element={<Recipes />} />
      </Routes>
    </div>
  );
}

export default App;
