import React from "react";
import appartBackground from "../assets/background.png";
import "../composants/ImageBanner.scss";

function ImageBanner() {
  return (
    <div className="banner__img">
      <img src={appartBackground} alt="appart" />
    </div>
  );
}

export default ImageBanner;
