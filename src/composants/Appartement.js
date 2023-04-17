import React from "react";
import "./Appartement.scss";
import { Link } from "react-router-dom";

function Appartement(props) {
  return (
    <Link to="/Logement" state={{ apartmentId: props.id }}>
      <div className="location">
        <img src={props.imageUrl} alt="" />
        <div className="location__title">{props.title}</div>
      </div>
    </Link>
  );
}

export default Appartement;
