import React from "react";
import { EmulatorCard } from "../../components/index";
import { snes9xLogo, snes9xExLogo } from "../../images/index";
import "./emulators.sass";

const Emulators = () => {
  return (
    <div className="emulators">
      <EmulatorCard
        src={snes9xLogo}
        alt={"Snes9x"}
        textLabel={"Windows 10, 8.1 e 7"}
        textA={"Download"}
        hrefA={
          "https://drive.google.com/uc?export=download&id=1EVecKxyWuMK5mn1ujZbkL61uqzMVNRFV"
        }
      />
      <EmulatorCard
        src={snes9xLogo}
        alt={"Snes9x"}
        textLabel={"Linux Ubuntu, Mint, Pop!_OS ..."}
        textA={"Download"}
        hrefA={
          "https://drive.google.com/uc?export=download&id=1l2GXIb7K2pTOHwWK-mGItL15lXz2Hr8s"
        }
      />
      <EmulatorCard
        className={"EX"}
        src={snes9xExLogo}
        alt={"Snes9x EX+"}
        textLabel={"Android"}
        textA={"Download"}
        hrefA={
          "https://drive.google.com/uc?export=download&id=1iOhaLkVgEQqqlAlpq0dHFz_bSr6SEgtK"
        }
      />
    </div>
  );
};

export default Emulators;
