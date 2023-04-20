import React, { useState, useEffect } from "react";
import "../pages/AppartementPage.scss";
import Description from "../composants/Description";
import AppartementHeader from "../composants/AppartementHeader";
import Carousel from "../composants/Carousel";
import { useLocation } from "react-router-dom";

function AppartementPage() {
  const location = useLocation();

  const [flat, setFlat] = useState(null);
  useEffect(() => {
    const abortController = new AbortController();
    fetch("kasa-flats.json", { signal: abortController.signal })
      .then((res) => res.json())
      .then((flats) => {
        const flat = flats.find(
          (flat) => flat.id === location.state.apartmentId
        );
        setFlat(flat);
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log(
            "extraction annulé pas de message d'erreur, pas 45000 rêquetes pour rien"
          );
        } else {
          console.error(error);
        }
      });
    return () => {
      abortController.abort();
    };
  }, [location.state.apartmentId]);

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

/* Dans ce code pour les page de chaque appartements, on utilise : 

useLocation, pour obtenir l'ID de l'appartement sélectionné, 
transmis via 'state'.

useState, pour stocker 'flat' qui représente l'appartement à afficher.
L'état de base est 'null', car on ne sait pas quel appartement va être
affiché.

useEffect, pour effectuer la requête vers le fichier JSON, qui contient
les data des appartements, via "fetch".

abortController, pour annuler les rêquetes inutiles en cours d'excution.

key, pour éviter les erreurs d'affichage en React, 
lorque l'on crée des éléments de liste à partir du tableau 'flats.equipements.*/
