import React, { useEffect, useState } from "react";
import "./createRoms.sass";
import { Form } from "../../components";
import { useRomsContext } from "../../hooks/useRomsContext";

const CreateRoms = () => {
  const { roms, setRoms } = useRomsContext();

  useEffect(() => {
    console.log(roms);
  }, [roms]);

  const handleCreate = async (newRom) => {
    try {
      const response = await fetch("http://localhost:3001/roms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([...roms, newRom]),
      });

      if (!response.ok) {
        throw new Error("Erro ao Adicionar!");
      }

      const updatedRoms = await response.json();
      setRoms(updatedRoms);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="createRoms">
      <h1>Criar ROMs</h1>
      <Form onCreateRom={handleCreate} />
    </div>
  );
};

export default CreateRoms;
