import React from "react";
import "../composants/Description.scss";

function Description() {
  return (
    <>
      <div className="description">
        <p className="description__header">
          <span>Description</span>
          <i class="fa-solid fa-chevron-down"></i>
        </p>
        <p className="description__content">
          Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer
          l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec
          5 lignes de métro et de nombreux bus. Logement parfait pour les
          voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de
          la gare de l'est (7 minutes à pied).
        </p>
      </div>
    </>
  );
}

export default Description;
