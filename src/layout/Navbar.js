import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import KasaHomeLogo from "../assets/Kasahome.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={KasaHomeLogo} alt="logo de Kasa" width="60%" />
      </div>
      <Link to="/Accueil">
        <div className="navbar__title">Accueil</div>
      </Link>
      <Link to="/Apropos">
        <div className="navbar__title">A Propos</div>
      </Link>
    </nav>
  );
}

export default Navbar;
