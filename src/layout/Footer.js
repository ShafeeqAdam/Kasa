import React from "react";
import "./Footer.scss";
import KasaFooterLogo from "../assets/Kasafooter.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__logo">
        <img src={KasaFooterLogo} alt="Logo du footer" />
      </div>
      <div className="footer__text">© 2020 Kasa. All rights reserved</div>
    </div>
  );
}

export default Footer;
