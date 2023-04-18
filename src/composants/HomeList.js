import React, { useEffect, useState } from "react";
import "./HomeList.scss";
import Appartement from "./Appartement";

function HomeList() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    fetch("kasa-flats.json", { signal: abortController.signal })
      .then((res) => res.json())
      .then((res) => setApartments(res))
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
  }, []);

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
