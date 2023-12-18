import { useContext } from "react";
import { OthersContext } from "../context/index";

export const useOthersContext = () => {
  const context = useContext(OthersContext);

  if (!context) {
    console.log("Contextos não encontrado!");
  }

  return context;
};
