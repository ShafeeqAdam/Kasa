import React from "react";
import "../pages/About.scss";
import AboutBanner from "../composants/AboutBanner";
import AppartementDescription from "../composants/Description";

function About() {
  return (
    <>
      <AboutBanner />
      <div className="about__layout">
        <AppartementDescription />
        <AppartementDescription />
        <AppartementDescription />
        <AppartementDescription />
      </div>
    </>
  );
}

export default About;
