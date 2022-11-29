import React from "react";
import Navbar from "../../components/navBar/NavBar";
import CardCategory from "../../components/card/CardCategory";
import SideBarCategories from "../../components/sideBarCategories/SideBarCategories";

const Category = () => {
  return (
    <>
      <header className="header-container">
        <Navbar />
      </header>
      <SideBarCategories />
      <div className="title-container">
        <h1 className="category-title">
          Et stort utvalg av nydelige måltider i alle kategorier
        </h1>
        <h2 className="category-title">Finn din favoritt idag!</h2>
      </div>
      <div className="category-container">
        <CardCategory />
      </div>
    </>
  );
};
export default Category;
