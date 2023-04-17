import React from "react";
import "../composants/AppartementHeader.scss";

function AppartementHeader(props) {
  const flat = props.flat;
  return (
    <div className="appartement__header">
      <div className="appartement__title">
        <h1>{flat.title}</h1>
        <h2>{flat.location}</h2>
        <div className="appartement__tags">
          {flat.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
      <div className="appartement__owner">
        <div className="appartement__owner__details">
          <h3>{flat.host.name}</h3>
          <div className="appartement__badge">
            <img src={flat.host.picture} alt="proprio" />
          </div>
        </div>
        <div className="appartement__stars">
          {[1, 2, 3, 4, 5].map((num) => (
            <span key={num} className={flat.rating >= num ? "on" : ""}>
              ★
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AppartementHeader;
