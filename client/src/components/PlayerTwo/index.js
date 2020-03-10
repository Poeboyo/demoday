import React from "react";
import "materialize-css";
import $ from "jquery";
import M from "materialize-css";

document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".carousel");
  M.Carousel.init(elems, {});
});

let playerTwo;

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
  name: "Waluigi",
  stats: {
    health: 100,
    attack: 15,
    defense: 5,
    evasion: 20,
    speed: 10
  }
};
class PlayerTwoSelect extends React.Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function() {
      document.querySelectorAll(".carousel");
    });
  }
  render() {
    $("#odimmTwo").on("click", function() {
      playerTwo = odimm;
      console.log("Player Two:", playerTwo);
    });
    $("#endeavorTwo").on("click", function() {
      playerTwo = endeavor;
      console.log("Player Two:", playerTwo);
    });
    $("#dekuTwo").on("click", function() {
      playerTwo = deku;
      console.log("Player Two:", playerTwo);
    });
    $("#trissTwo").on("click", function() {
      playerTwo = triss;
      console.log("Player Two:", playerTwo);
    });
    $("#allForOneTwo").on("click", function() {
      playerTwo = allForOne;
      console.log("Player Two:", playerTwo);
    });
    $("#allmightTwo").on("click", function() {
      playerTwo = allMight;
      console.log("Player Two:", playerTwo);
    });
    $("#linkTwo").on("click", function() {
      playerTwo = link;
      console.log("Player Two:", playerTwo);
    });
    $("#gokuTwo").on("click", function() {
      playerTwo = goku;
      console.log("Player Two:", playerTwo);
    });
    $("#waluigiTwo").on("click", function() {
      playerTwo = waluigi;
      console.log("Player Two:", playerTwo);
    });
    $("#inteleonTwo").on("click", function() {
      playerTwo = inteleon;
      console.log("Player Two:", playerTwo);
    });

    return (
      <div id="carouselTwo">
        <div className="carousel">
          <a className="carousel-item" href="#one!" samesite="none">
            <img
              src="https://vignette.wikia.nocookie.net/bokunoheroacademia/images/2/22/Endeavor_Anime_Profile.png/revision/latest/scale-to-width-down/239?cb=20170906213725"
              alt="Endeavor"
              id="endeavorTwo"
            />
          </a>
          <a className="carousel-item" href="#two!" samesite="none">
            <img
              src="https://vignette.wikia.nocookie.net/witcher/images/f/f3/Tw3_journal_mirrorman.png/revision/latest/scale-to-width-down/350?cb=20170501180556"
              alt="Gaunter O Dimm"
              id="odimmTwo"
            />
          </a>

          <a className="carousel-item" href="#three!" samesite="none">
            <img
              src="https://vignette.wikia.nocookie.net/bokunoheroacademia/images/5/55/All_Might_Hero_Form_Full_Body.png/revision/latest/scale-to-width-down/311?cb=20190129015644"
              alt="Allmight"
              id="allmightTwo"
            />
          </a>
          <a className="carousel-item" href="#four!">
            <img
              src="https://vignette.wikia.nocookie.net/bokunoheroacademia/images/f/f7/Izuku_Midoriya_Hero_Costume_Action_Pose.png/revision/latest/scale-to-width-down/350?cb=20190909030259"
              alt="Deku"
              id="dekuTwo"
            />
          </a>
          <a className="carousel-item" href="#five!" samesite="none">
            <img
              src="https://vignette.wikia.nocookie.net/zelda/images/5/57/Breath_of_the_Wild_Artwork_Link_%28Official_Artwork%29.png/revision/latest/scale-to-width-down/350?cb=20160623185226"
              alt="Link"
              id="linkTwo"
            />
          </a>
          <a className="carousel-item" href="#six!" samesite="none">
            <img
              src="https://vignette.wikia.nocookie.net/p__/images/2/22/Dragon-Ball-Goku-PNG-Free-Download.png/revision/latest/scale-to-width-down/347?cb=20181207162901&path-prefix=protagonist"
              alt="Goku"
              id="gokuTwo"
            />
          </a>
          <a className="carousel-item" href="#seven!" samesite="none">
            <img
              src="https://vignette.wikia.nocookie.net/mario/images/6/62/840px-SuperMarioParty_Waluigi.png/revision/latest/scale-to-width-down/310?cb=20190519205517"
              alt="Waluigi"
              id="waluigiTwo"
            />
          </a>
          <a className="carousel-item" href="#eight!" samesite="none">
            <img
              src="https://vignette.wikia.nocookie.net/bokunoheroacademia/images/3/32/All_For_One_Profile.png/revision/latest/scale-to-width-down/243?cb=20180528014920"
              alt="All For One"
              id="allForOneTwo"
            />
          </a>
          <a className="carousel-item" href="#nine!" samesite="none">
            <img
              src="https://cdn.bulbagarden.net/upload/thumb/e/e4/818Inteleon.png/250px-818Inteleon.png"
              alt="Intellion"
              id="inteleonTwo"
            />
          </a>
          <a className="carousel-item" href="#ten!" samesite="none">
            <img
              src="https://vignette.wikia.nocookie.net/witcher/images/2/27/Triss-TW3-new-render.png/revision/latest/scale-to-width-down/313?cb=20160402173701"
              alt="Triss"
              id="trissTwo"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default PlayerTwoSelect;
