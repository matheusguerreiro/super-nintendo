import { createContext, useState } from "react";

export const RomsContext = createContext();

export const RomsContextProvider = ({ children }) => {
  const [roms, setRoms] = useState([]);

  return (
    <RomsContext.Provider value={{ roms, setRoms }}>
      {children}
    </RomsContext.Provider>
  );
};
