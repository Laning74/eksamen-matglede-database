import React, { useEffect, useContext } from "react";
import { foodContext } from "../../components/context/Context";
import Navbar from "../../components/navBar/NavBar";
import Card from "../../components/card/Card";
import SideBarCategories from "../../components/sideBarCategories/SideBarCategories";

const Category = () => {
  const { fetchCategory, category } = useContext(foodContext);

  useEffect(() => {
    fetchCategory();
  }, [fetchCategory]);

  return (
    <>
      <header className="header-container">
        <Navbar />
      </header>
      <SideBarCategories />
      <div className="title-container">
        <h1 className="category-title">Søk etter dine favorittoppskrifter!</h1>
      </div>
      <div className="category-container">
        <Card />
        {/* {category.map((categories) => (
          <div className="category-grid" key={categories.idCategory}>
            <img src={categories.strCategoryThumb} alt="#" />
            <h4>{categories.strCategory}</h4>
          </div>
        ))} */}
      </div>
    </>
  );
};
export default Category;
