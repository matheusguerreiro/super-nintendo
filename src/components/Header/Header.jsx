import React from "react";
import { snesLogo96, fourMark128 } from "../../images/index";
import "./header.sass";

const Header = () => {
  return (
    <header className="header">
      <img className="fourMark" src={fourMark128} alt="Four Mark" />
      <img className="snesLogo" src={snesLogo96} alt="SNES Logo" />
      <img className="fourMark" src={fourMark128} alt="Four Mark" />
    </header>
  );
};

export default Header;
