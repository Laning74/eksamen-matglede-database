import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Meals from "./pages/meals/Meals";
import Category from "./pages/category/Category";
import Recipes from "./pages/recipes/Recipes";
import ShoppingList from "./components/shoppingList/ShoppingList";
import Dagens from "./pages/dagens/Dagens";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meals" element={<Meals />} />
        <Route path="/category/:type" element={<Category />} />
        <Route path="/category/:meals/:recipeId" element={<Recipes />} />
        <Route path="/meals/:recipeId" element={<Recipes />} />
        <Route path="/dagens" element={<Dagens />} />
        <Route path="/shoppinglist" element={<ShoppingList />} />
      </Routes>
    </div>
  );
}

export default App;
