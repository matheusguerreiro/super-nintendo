import React, { useState } from "react";
import "./form.sass";
import uuid from "react-uuid";

const Form = ({ onCreateRom }) => {
  const [newRom, setNewRom] = useState({
    id: uuid(),
    title: "",
    front: "",
    game: "",
    rom: "",
    region: ""
  });

  const isFormValid = Object.values(newRom).every((value) => value !== "");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewRom({ ...newRom, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let rom = {
      id: newRom.id,
      title: newRom.title.trim(),
      front: transformLink(newRom.front),
      game: transformLink(newRom.game),
      rom: transformLink(newRom.rom),
      region: newRom.region
    };

    onCreateRom(rom);

    setNewRom({
      id: uuid(),
      title: "",
      front: "",
      game: "",
      rom: "",
      region: ""
    });
  };

  const transformLink = (link) => {
    const regex = /\/file\/d\/([^/]+)\/view\?usp=drive_link/;
    const match = link.match(regex);

    if (match) {
      const fileId = match[1];
      return `https://drive.google.com/uc?export=download&id=${fileId}`;
    }

    return link;
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="labelsInputs">
        <div className="labels">
          <label>id:</label>
          <label>title:</label>
          <label>front:</label>
          <label>game:</label>
          <label>rom:</label>
          <label>region:</label>
        </div>
        <div className="inputs">
          <div className="id">{newRom.id}</div>
          <input
            type="text"
            name="title"
            value={newRom.title}
            onChange={handleChange}
          />
          <input
            type="text"
            name="front"
            value={newRom.front}
            onChange={handleChange}
          />
          <input
            type="text"
            name="game"
            value={newRom.game}
            onChange={handleChange}
          />
          <input
            type="text"
            name="rom"
            value={newRom.rom}
            onChange={handleChange}
          />
          <select
            value={newRom.region}
            onChange={handleChange}
            name="region"
          >
            <option value="">...</option>
            <option value="US">US</option>
            <option value="EU">EU</option>
            <option value="JP">JP</option>
          </select>
        </div>
      </div>

      <button disabled={!isFormValid} className="submit" type="submit">
        Criar
      </button>
    </form>
  );
};

export default Form;
