import React from "react";
import "./roms.sass";
import { useRomsContext } from "../../hooks";
import RomCard from "../../components/RomCard/RomCard";

const Roms = () => {
  const { roms } = useRomsContext();
  // const { romsFixed, romsScrollY } = useOthersContext();

  return (
    <div className="roms">
      <h2>em Desenvolvimento...</h2>
      <div className="content">
        {roms.map((r) => {
          return <RomCard rom={r} key={r.id}/>;
        })}
      </div>
    </div>
  );
};

export default Roms;
