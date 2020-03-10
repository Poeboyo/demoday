import React from "react";
import "./style.css";
import { Row, Col } from "react-materialize";
import { Link } from "react-router-dom";
import PlayerOneSelect from "../../components/PlayerOne";
import BattleLogo from "../../components/BattleLogo";

function Battle() {
  return (
    <div id="characterSelectStage">
      {/* Go Back to Home Page */}

      <Link
        to="/"
        className="btn-floating btn-large waves-effect waves-light red"
        id="back-button"
      >
        <i className="material-icons">arrow_back</i>
      </Link>

      <BattleLogo></BattleLogo>
      {/*  Character Selection */}
      <Row id="characterSelectScreen">
        <Col s={12}>
          <div id="characterSelectionOne">
            <PlayerOneSelect />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Battle;
