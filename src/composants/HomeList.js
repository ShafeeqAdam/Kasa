import React, { useEffect, useState } from "react";
import "./HomeList.scss";
import Appartement from "./Appartement";

function HomeList() {
  const [apartments, setApartments] = useState([]);

  useEffect(fetchApartments, []);

  function fetchApartments() {
    fetch("kasa-flats.json")
      .then((res) => res.json())
      .then((res) => setApartments(res))
      .catch(console.error);
  }
  return (
    <div className="home__layout">
      {apartments.map((apartment) => (
        <Appartement
          key={apartment.id}
          title={apartment.title}
          imageUrl={apartment.cover}
          id={apartment.id}
        />
      ))}
    </div>
  );
}
export default HomeList;
