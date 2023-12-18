import React from "react";
import { NavLink } from "react-router-dom";
import { dK96, link96, marioEYoshi96, samus96 } from "../../images/index";
import "./nav.sass";

const Nav = () => {
  return (
    <nav className="nav">
      <NavLink to="/" end>
        <img src={marioEYoshi96} alt="Mario e Yoshi" className="char" />
        <label className="label">Home</label>
      </NavLink>
      <NavLink to="/emulators">
        <img src={samus96} alt="Samus" className="char" />
        <label className="label">Emuladores</label>
      </NavLink>
      <NavLink to="/roms">
        <img src={link96} alt="Link" className="char" />
        <label className="label">Roms</label>
      </NavLink>
      <NavLink to="/history">
        <img src={dK96} alt="Donkey Kong" className="char" />
        <label className="label">História</label>
      </NavLink>
    </nav>
  );
};

export default Nav;
