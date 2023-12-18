import { useContext } from "react";
import { RomsContext } from "../context/index";

export const useRomsContext = () => {
  const context = useContext(RomsContext);

  if (!context) {
    console.log("Contexto não encontrado!");
  }

  return context;
};
