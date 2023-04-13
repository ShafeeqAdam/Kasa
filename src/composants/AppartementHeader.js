import React from "react";
import "../composants/AppartementHeader.scss";

function AppartementHeader() {
  return (
    <div className="appartement__header">
      <div className="appartement__title">
        <h1>Cozy loft on the Canal Saint Martin</h1>
        <h2>Paris, île de France</h2>
        <div className="appartement__tags">
          <span>Cozy</span>
          <span>Canal</span>
          <span>Paris 10</span>
        </div>
      </div>
      <div className="appartement__owner">
        <div className="appartement__owner__details">
          <h3>Alexandre Dumas</h3>
          <div className="appartement__badge"></div>
        </div>
        <div className="appartement__stars">
          <span className="on">★</span>
          <span className="on">★</span>
          <span className="on">★</span>
          <span className="off">★</span>
          <span className="off">★</span>
        </div>
      </div>
    </div>
  );
}

export default AppartementHeader;
