import React, { useState } from "react";
import "./form.sass";
import uuid from "react-uuid";

const Form = ({ onCreateRom }) => {
  const [newRom, setNewRom] = useState({
    id: uuid(),
    title: "",
    front: "",
    back: "",
    mobile: "",
    rom: "",
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
      back: transformLink(newRom.back),
      mobile: transformLink(newRom.mobile),
      rom: transformLink(newRom.rom),
    };

    onCreateRom(rom);

    setNewRom({
      id: uuid(),
      title: "",
      front: "",
      back: "",
      mobile: "",
      rom: "",
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
          <label>back:</label>
          <label>mobile:</label>
          <label>rom:</label>
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
            name="back"
            value={newRom.back}
            onChange={handleChange}
          />
          <input
            type="text"
            name="mobile"
            value={newRom.mobile}
            onChange={handleChange}
          />
          <input
            type="text"
            name="rom"
            value={newRom.rom}
            onChange={handleChange}
          />
        </div>
      </div>

      <button disabled={!isFormValid} className="submit" type="submit">
        Criar
      </button>
    </form>
  );
};

export default Form;
