import React from "react";
import PrimaryButton from "../../components/primaryButton/PrimaryButton";
import imgBackground from "./home_backgroud_food.jpg";

const Home = () => {
  return (
    <>
      <div className="front-container">
        <div className="testing">Her kommer home page</div>
        <PrimaryButton />
      </div>
      <img src={imgBackground} alt="background food" />
    </>
  );
};

export default Home;
