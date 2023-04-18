import React from "react";
import Banner from "../composants/Banner";
import HomeList from "../composants/HomeList";
import "../pages/Home.scss";

function Home() {
  return (
    <div>
      <Banner />
      <HomeList />
    </div>
  );
}

export default Home;
