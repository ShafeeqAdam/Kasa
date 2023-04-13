import React from "react";
import "../pages/ErrorPageNotFound.scss";
import Navbar from "../layout/Navbar";
import Body from "../layout/Body";
import { Link } from "react-router-dom";

function ErrorPageNotFound() {
  return (
    <>
      <Navbar />
      <Body>
        <div className="error__layout">
          <h1>404</h1>
          <h2>Oups ! La page que vous cherchez n'existe pas.</h2>
          <Link to="/Accueil">Retourner sur la page d'accueil</Link>
        </div>
      </Body>
    </>
  );
}

export default ErrorPageNotFound;
