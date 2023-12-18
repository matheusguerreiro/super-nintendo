import React from "react";
import "./roms.sass";
import { useRomsContext, useOthersContext } from "../../hooks";
import RomCard from "../../components/RomCard/RomCard";

const Roms = () => {
  const { roms } = useRomsContext();
  const { romsFixed, romsScrollY } = useOthersContext();

  return (
    <div className="roms">
      <h2>em Desenvolvimento...</h2>
      <div className="content">
        {roms.map((r) => {
          return <RomCard rom={r} />;
        })}
      </div>
    </div>
  );
};

export default Roms;
