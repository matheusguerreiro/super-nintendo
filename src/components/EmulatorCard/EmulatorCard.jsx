import React from "react";
import "./emulatorCard.sass";

const EmulatorCard = ({ src, alt, textLabel, textA, hrefA, className }) => {
  return (
    <div className={className ? `emulatorCard${className}` : "emulatorCard"}>
      {(src || alt) && <img src={src} alt={alt} className="emulatorImg" />}
      {textLabel && <label className="emulatorLabel">{textLabel}</label>}
      {(textA || hrefA) && (
        <a href={hrefA} className="emulatorA">
          {textA}
        </a>
      )}
    </div>
  );
};

export default EmulatorCard;
