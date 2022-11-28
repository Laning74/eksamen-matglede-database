import React from "react";
import PrimaryButton from "../../components/primaryButton/PrimaryButton";
import imgBackground from "./home_backgroud_food.jpg";
import Logo from "../../../src/logo/Logo Matglede green.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="flexbox-container">
        <div className="flexbox">
          <img src={Logo} alt="Matglede logo" />
          <h2 className="ingress">
            Tips, råd og planlegging for en enklere, og mer spennende
            mathverdag!
          </h2>
          <Link to="/meals">
            <div className="primary-btn-container">
              <PrimaryButton text={"START IDAG"} />
            </div>
          </Link>
        </div>
      </div>
      <img className="background" src={imgBackground} alt="background food" />
    </>
  );
};

export default Home;
