import React from "react";
import "../composants/Description.scss";
import { useState } from "react";

function Description(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  function toggleExpand() {
    setIsExpanded((prev) => !prev);
  }

  return (
    <>
      <div className="description">
        <p className="description__header" onClick={toggleExpand}>
          <span>{props.title}</span>
          <i
            className={`fa-solid fa-chevron-${isExpanded ? "up" : "down"}`}
          ></i>
        </p>
        {isExpanded && <p className="description__content"> {props.content}</p>}
      </div>
    </>
  );
}

export default Description;

/*Dans ce code on utilise :

useState pour déclarer l'état 'isExpanded' 
et 'toggleExpand' pour inverser la valeur de cet état à chaque qu'elle est appelée.

*/
