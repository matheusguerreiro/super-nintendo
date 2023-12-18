import React from "react";
import { sfcLogoMark64, sfcLogoName48 } from "../../images/index";
import "./footer.sass";

const Footer = () => {
  return (
    <footer className="footer">
      <img src={sfcLogoMark64} alt="SFC Logo" className="sfcLogoMark" />
      <div className="center">
        <img src={sfcLogoName48} alt="SFC Logo" className="sfcLogo" />
      </div>
      <img src={sfcLogoMark64} alt="SFC Logo" className="sfcLogoMark" />
    </footer>
  );
};

export default Footer;
