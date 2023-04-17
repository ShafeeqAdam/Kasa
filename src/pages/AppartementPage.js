import React, { useState, useEffect } from "react";
import "../pages/AppartementPage.scss";
import Description from "../composants/Description";
import AppartementHeader from "../composants/AppartementHeader";
import Carousel from "../composants/Carousel";
import { useLocation } from "react-router-dom";

function AppartementPage() {
  const location = useLocation();

  const [flat, setFlat] = useState(null);
  useEffect(fetchApartmentData);

  function fetchApartmentData() {
    fetch("kasa-flats.json")
      .then((res) => res.json())
      .then((flats) => {
        const flat = flats.find(
          (flat) => flat.id === location.state.apartmentId
        );
        setFlat(flat);
      })
      .catch(console.error);
  }
  if (flat == null) return <div>Loading...</div>;
  return (
    <>
      <Carousel pictures={flat.pictures} />
      <AppartementHeader flat={flat} />
      <div className="appartement__layout">
        <Description title="Description" content={flat.description} />
        <Description
          title="Equipements"
          content={flat.equipments.map((eq, index) => (
            <li key={index}>{eq}</li>
          ))}
        />
      </div>
    </>
  );
}

export default AppartementPage;
