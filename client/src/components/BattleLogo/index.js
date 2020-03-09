import React from "react";
import "./style.css";

function BattleLogo() {
  return (
    <div id="battleContainer">
      <img
        src="./images/chooseCharacter.png"
        id="battleLogo"
        alt="battle logo"
      ></img>
      <img src="./images/pulse.gif" id="pulseBattle" alt="energy pulse"></img>
    </div>
  );
}

export default BattleLogo;
