import React from "react";
import PrimaryButton from "../../components/primaryButton/PrimaryButton";
import imgBackground from "./home_backgroud_food.jpg";
import Logo from "../../../src/logo/Logo Matglede green.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="front-container">
        <img src={Logo} alt="Matglede logo" />
        <h2 className="testing">
          Tips, råd og planlegging for en enklere, og mer spennende mathverdag!
        </h2>
        <Link to="/meals">
          <PrimaryButton text={"START IDAG"} />
        </Link>
      </div>
      <img src={imgBackground} alt="background food" />
    </>
  );
};

export default Home;
