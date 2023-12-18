import { createContext, useState } from "react";

export const OthersContext = createContext();

export const OthersContextProvider = ({ children }) => {
  const [romsFixed, setRomsFixed] = useState(false);
  const [romsScrollY, setRomsScrollY] = useState(0);

  return (
    <OthersContext.Provider
      value={{
        romsFixed,
        setRomsFixed,
        romsScrollY,
        setRomsScrollY,
      }}
    >
      {children}
    </OthersContext.Provider>
  );
};
