import React from "react";
import "materialize-css";
import $ from "jquery";
import { M } from "materialize-css/dist/js/materialize.min.js";

class PlayerOne extends React.Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".carousel");
      console.log(M);
    });
  }
  render() {
    return (
      <div id="carouselTwo">
        <div className="carousel">
          <a className="carousel-item" href="#one!">
            <img src="https://vignette.wikia.nocookie.net/witcher/images/f/f3/Tw3_journal_mirrorman.png/revision/latest/scale-to-width-down/350?cb=20170501180556" />
          </a>
          <a className="carousel-item" href="#two!">
            <img src="https://vignette.wikia.nocookie.net/bokunoheroacademia/images/2/22/Endeavor_Anime_Profile.png/revision/latest/scale-to-width-down/239?cb=20170906213725" />
          </a>
          <a className="carousel-item" href="#three!">
            <img src="https://vignette.wikia.nocookie.net/bokunoheroacademia/images/5/55/All_Might_Hero_Form_Full_Body.png/revision/latest/scale-to-width-down/311?cb=20190129015644" />
          </a>
          <a className="carousel-item" href="#four!">
            <img src="https://vignette.wikia.nocookie.net/bokunoheroacademia/images/f/f7/Izuku_Midoriya_Hero_Costume_Action_Pose.png/revision/latest/scale-to-width-down/350?cb=20190909030259" />
          </a>
          <a className="carousel-item" href="#five!">
            <img src="https://vignette.wikia.nocookie.net/zelda/images/5/57/Breath_of_the_Wild_Artwork_Link_%28Official_Artwork%29.png/revision/latest/scale-to-width-down/350?cb=20160623185226" />
          </a>
          <a className="carousel-item" href="#six!">
            <img src="https://vignette.wikia.nocookie.net/p__/images/2/22/Dragon-Ball-Goku-PNG-Free-Download.png/revision/latest/scale-to-width-down/347?cb=20181207162901&path-prefix=protagonist" />
          </a>
          <a className="carousel-item" href="#seven!">
            <img src="https://vignette.wikia.nocookie.net/mario/images/6/62/840px-SuperMarioParty_Waluigi.png/revision/latest/scale-to-width-down/310?cb=20190519205517" />
          </a>
        </div>
      </div>
    );
  }
}

export default PlayerOne;
