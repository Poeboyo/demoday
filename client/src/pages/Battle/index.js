import React from "react";
import "./style.css";
import { Row, Col } from "react-materialize";
import { Link } from "react-router-dom";
import PlayerOneSelect from "../../components/PlayerOne";
import PlayerTwoSelect from "../../components/PlayerTwo";
// import BattleLogo from "../../components/BattleLogo";
function Battle() {
  return (
    <div id="characterSelectStage">
      {/* Go Back to Home Page */}

      <Link
        to="/"
        className="btn-floating btn-large waves-effect waves-light red back-button"
      >
        <i className="material-icons right">arrow_back</i>
      </Link>

      {/* <BattleLogo></BattleLogo> */}
      {/*  Character Selection */}
      <Row id="characterSelectScreen">
        <Col s={5}>
          <div id="characterSelectionOne">
            <PlayerOneSelect />
          </div>
        </Col>
        <Col s={2}></Col>
        <Col s={5}>
          <div id="characterSelectionTwo">
            <PlayerTwoSelect />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Battle;
