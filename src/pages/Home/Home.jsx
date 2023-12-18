import React from "react";
import { sfcConsoleLogo1440, snesConsoleLogo1440 } from "../../images/index";
import "./home.sass";

const Home = () => {
  return (
    <div className="home">
      <div className="snesConsole">
        <img src={snesConsoleLogo1440} alt="" className="snesConsoleLogo" />
      </div>
      <div className="sfcConsole">
        <img src={sfcConsoleLogo1440} alt="" className="sfcConsoleLogo" />
      </div>
    </div>
  );
};

export default Home;
