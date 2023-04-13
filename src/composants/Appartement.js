import React from "react";
import "./Appartement.scss";
import { Link } from "react-router-dom";

function Appartement() {
  return (
    <Link to="/Logement">
      <div className="location">
        <div className="location__title">Titre de la location</div>
      </div>
    </Link>
  );
}

export default Appartement;
