import React from "react";
import "../composants/AboutBanner.scss";
import AboutBackground from "../assets/AboutImage.png";

function AboutBanner() {
  return (
    <div className="about__banner__img">
      <img src={AboutBackground} alt="about" />
    </div>
  );
}

export default AboutBanner;
