import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Meals from "./pages/meals/Meals";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/meals" element={<Meals />} />
        {/* <Route path="/persons" element={<Persons />} /> */}
      </Routes>
    </div>
  );
}

export default App;
