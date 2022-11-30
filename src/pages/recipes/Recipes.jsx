import Navbar from "../../components/navBar/NavBar";
import RecipesInfo from "../../components/recipesInfo/RecipesInfo";
import SideBarCategories from "../../components/sideBarCategories/SideBarCategories";

const Recipes = () => {
  return (
    <>
      <header className="header-container">
        <Navbar />
      </header>
      <SideBarCategories />
      <div className="title-container"> </div>
      <RecipesInfo />
    </>
  );
};

export default Recipes;
