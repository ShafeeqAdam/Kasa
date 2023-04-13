import React from "react";
import "./HomeList.scss";
import Appartement from "./Appartement";

function HomeList() {
  return (
    <div className="home__layout">
      <Appartement />
      <Appartement />
      <Appartement />
      <Appartement />
      <Appartement />
      <Appartement />
    </div>
  );
}
export default HomeList;
