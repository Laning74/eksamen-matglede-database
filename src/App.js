import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Meals from "./pages/meals/Meals";
import Category from "./pages/category/Category";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/meals" element={<Meals />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </div>
  );
}

export default App;
