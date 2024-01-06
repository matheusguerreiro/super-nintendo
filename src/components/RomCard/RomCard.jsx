import React, { useState } from "react";
import "./romCard.sass";
import { useOthersContext } from "../../hooks";

const RomCard = ({ rom }) => {
  const [back, setBack] = useState(false);
  const { setRomsFixed, setRomsScrollY } = useOthersContext();

  window.addEventListener("scroll", () => {
    setRomsScrollY(window.scrollY);
  });

  const handleClick = () => {
    setBack(!back);
    setRomsFixed(!back);
  };

  return (
    <div className="romCard">
      <img
        onClick={handleClick}
        src={rom.front}
        alt={rom.title}
        className="front"
      />

      {back && (
        <div className="background">
          <div className="container">
            <img
              onClick={handleClick}
              src={rom.game}
              alt={rom.title}
              className="back"
            />
            <div className="buttons">
              {/* <a href="#" className="buttonTraduzir">
                Traduzir
              </a> */}
              <a href={rom.rom} className="buttonDownload">
                Download
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RomCard;
