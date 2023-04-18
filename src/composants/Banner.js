import React from "react";
import "./Banner.scss";
import HomeBanner from "../assets/banner.png";

function Banner() {
  return (
    <div className="banner">
      <img src={HomeBanner} alt="banner" />
      <h2>Chez vous, partout et ailleurs</h2>
    </div>
  );
}

export default Banner;
