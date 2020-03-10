import React from "react";
import "materialize-css";
import $ from "jquery";
import { M } from "materialize-css/dist/js/materialize.min.js";

let playerOne;

let odimm = {
  name: "Gaunter O'Dimm",
  stats: {
    health: 100,
    attack: 15,
    defense: 5,
    evasion: 15,
    speed: 5
  }
};

let endeavor = {
  name: "Endeavor",
  stats: { health: 100, attack: 20, defense: 5, evasion: 10, speed: 5 }
};

let allMight = {
  name: "All Might",
  stats: {
    health: 100,
    attack: 10,
    defense: 10,
    evasion: 10,
    speed: 10
  }
};

let allForOne = {
  name: "All For One",
  stats: {
    health: 100,
    attack: 20,
    defense: 5,
    evasion: 5,
    speed: 10
  }
};

let triss = {
  name: "Triss Merigold",
  stats: {
    health: 100,
    attack: 10,
    defense: 10,
    evasion: 10,
    speed: 10
  }
};

let deku = {
  name: "Izuku Midoriya",
  stats: { health: 100, attack: 10, defense: 10, evasion: 10, speed: 10 }
};

let link = {
  name: "Link",
  stats: {
    health: 100,
    attack: 15,
    defense: 5,
    evasion: 10,
    speed: 10
  }
};

let inteleon = {
  name: "Inteleon",
  stats: {
    health: 100,
    attack: 10,
    defense: 5,
    evasion: 20,
    speed: 5
  }
};

let goku = {
  name: "Son Goku",
  stats: {
    health: 100,
    attack: 20,
    defense: 0,
    evasion: 20,
    speed: 10
  }
};

let waluigi = {
  name: "Son Goku",
  stats: {
    health: 100,
    attack: 15,
    defense: 5,
    evasion: 20,
    speed: 10
  }
};
class PlayerOne extends React.Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".carousel");
      console.log(M);
    });
  }
  render() {
    $("#odimmOne").on("click", function() {
      playerOne = odimm;
      console.log(playerOne);
    });
    return (
      <div id="carouselOne">
        <div className="carousel">
          <a className="carousel-item" href="#one!">
            <img
              src="https://vignette.wikia.nocookie.net/witcher/images/f/f3/Tw3_journal_mirrorman.png/revision/latest/scale-to-width-down/350?cb=20170501180556"
              alt="Gaunter O Dimm"
              id="odimmOne"
            />
          </a>
          <a className="carousel-item" href="#two!" id="endeavorOne">
            <img
              src="https://vignette.wikia.nocookie.net/bokunoheroacademia/images/2/22/Endeavor_Anime_Profile.png/revision/latest/scale-to-width-down/239?cb=20170906213725"
              alt="Endeavor"
            />
          </a>
          <a className="carousel-item" href="#three!" id="allmightOne">
            <img
              src="https://vignette.wikia.nocookie.net/bokunoheroacademia/images/5/55/All_Might_Hero_Form_Full_Body.png/revision/latest/scale-to-width-down/311?cb=20190129015644"
              alt="Allmight"
            />
          </a>
          <a className="carousel-item" href="#four!">
            <img
              src="https://vignette.wikia.nocookie.net/bokunoheroacademia/images/f/f7/Izuku_Midoriya_Hero_Costume_Action_Pose.png/revision/latest/scale-to-width-down/350?cb=20190909030259"
              alt="Deku"
              id="dekuOne"
            />
          </a>
          <a className="carousel-item" href="#five!" id="linkOne">
            <img
              src="https://vignette.wikia.nocookie.net/zelda/images/5/57/Breath_of_the_Wild_Artwork_Link_%28Official_Artwork%29.png/revision/latest/scale-to-width-down/350?cb=20160623185226"
              alt="Link"
            />
          </a>
          <a className="carousel-item" href="#six!" id="gokuOne">
            <img
              src="https://vignette.wikia.nocookie.net/p__/images/2/22/Dragon-Ball-Goku-PNG-Free-Download.png/revision/latest/scale-to-width-down/347?cb=20181207162901&path-prefix=protagonist"
              alt="Goku"
            />
          </a>
          <a className="carousel-item" href="#seven!" id="waluigiOne">
            <img
              src="https://vignette.wikia.nocookie.net/mario/images/6/62/840px-SuperMarioParty_Waluigi.png/revision/latest/scale-to-width-down/310?cb=20190519205517"
              alt="Waluigi"
            />
          </a>
          <a className="carousel-item" href="#eight!" id="allForOneOne">
            <img
              src="https://vignette.wikia.nocookie.net/bokunoheroacademia/images/3/32/All_For_One_Profile.png/revision/latest/scale-to-width-down/243?cb=20180528014920"
              alt="All For One"
            />
          </a>
          <a className="carousel-item" href="#nine!" id="inteleonOne">
            <img
              src="https://cdn.bulbagarden.net/upload/thumb/e/e4/818Inteleon.png/250px-818Inteleon.png"
              alt="Intellion"
            />
          </a>
          <a className="carousel-item" href="#ten!" id="trissOne">
            <img
              src="https://vignette.wikia.nocookie.net/witcher/images/2/27/Triss-TW3-new-render.png/revision/latest/scale-to-width-down/313?cb=20160402173701"
              alt="Triss"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default PlayerOne;
