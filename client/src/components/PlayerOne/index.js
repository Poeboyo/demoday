import React from "react";
import "materialize-css";
import $ from "jquery";
import M from "materialize-css";
import "./style.css";

document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".carousel");
  M.Carousel.init(elems, {});
});

let playerOne;
let playerTwo;

let odimm = {
  name: "Gaunter O'Dimm",
  img:
    "https://vignette.wikia.nocookie.net/witcher/images/f/f3/Tw3_journal_mirrorman.png/revision/latest/scale-to-width-down/350?cb=20170501180556",
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
  img:
    "https://vignette.wikia.nocookie.net/bokunoheroacademia/images/2/22/Endeavor_Anime_Profile.png/revision/latest/scale-to-width-down/239?cb=20170906213725",
  stats: { health: 100, attack: 15, defense: 5, evasion: 10, speed: 5 }
};

let allMight = {
  name: "All Might",
  img:
    "https://vignette.wikia.nocookie.net/bokunoheroacademia/images/5/55/All_Might_Hero_Form_Full_Body.png/revision/latest/scale-to-width-down/311?cb=20190129015644",
  stats: {
    health: 100,
    attack: 20,
    defense: 10,
    evasion: 10,
    speed: 10
  }
};

let allForOne = {
  name: "All For One",
  img:
    "https://vignette.wikia.nocookie.net/bokunoheroacademia/images/3/32/All_For_One_Profile.png/revision/latest/scale-to-width-down/243?cb=20180528014920",
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
  img:
    "https://vignette.wikia.nocookie.net/witcher/images/2/27/Triss-TW3-new-render.png/revision/latest/scale-to-width-down/313?cb=20160402173701",
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
  img:
    "https://vignette.wikia.nocookie.net/bokunoheroacademia/images/f/f7/Izuku_Midoriya_Hero_Costume_Action_Pose.png/revision/latest/scale-to-width-down/350?cb=20190909030259",
  stats: { health: 100, attack: 10, defense: 10, evasion: 10, speed: 15 }
};

let link = {
  name: "Link",
  img:
    "https://vignette.wikia.nocookie.net/zelda/images/5/57/Breath_of_the_Wild_Artwork_Link_%28Official_Artwork%29.png/revision/latest/scale-to-width-down/350?cb=20160623185226",
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
  img:
    "https://cdn.bulbagarden.net/upload/thumb/e/e4/818Inteleon.png/250px-818Inteleon.png",
  stats: {
    health: 100,
    attack: 10,
    defense: 5,
    evasion: 10,
    speed: 20
  }
};

let goku = {
  name: "Son Goku",
  img:
    "https://vignette.wikia.nocookie.net/p__/images/2/22/Dragon-Ball-Goku-PNG-Free-Download.png/revision/latest/scale-to-width-down/347?cb=20181207162901&path-prefix=protagonist",
  stats: {
    health: 100,
    attack: 20,
    defense: 10,
    evasion: 0,
    speed: 10
  }
};

let waluigi = {
  name: "Waluigi",
  img:
    "https://vignette.wikia.nocookie.net/mario/images/6/62/840px-SuperMarioParty_Waluigi.png/revision/latest/scale-to-width-down/310?cb=20190519205517",
  stats: {
    health: 100,
    attack: 20,
    defense: 5,
    evasion: 20,
    speed: 10
  }
};
class PlayerOneSelect extends React.Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function() {
      document.querySelectorAll(".carousel");
    });
  }
  render() {
    $("#odimmOne").on("click", function() {
      playerOne = odimm;
      $("#firstChoice").text("Choose: " + playerOne.name);
      $("#statsOne").text(
        "ATK: " +
          playerOne.stats.attack +
          " " +
          "DEF: " +
          playerOne.stats.defense +
          " " +
          "SPD: " +
          playerOne.stats.speed
      );
    });
    $("#endeavorOne").on("click", function() {
      playerOne = endeavor;
      $("#firstChoice").text("Choose: " + playerOne.name);
      $("#statsOne").text(
        "ATK: " +
          playerOne.stats.attack +
          " " +
          "DEF: " +
          playerOne.stats.defense +
          " " +
          "SPD: " +
          playerOne.stats.speed
      );
    });
    $("#dekuOne").on("click", function() {
      playerOne = deku;
      $("#firstChoice").text("Choose: " + playerOne.name);
      $("#statsOne").text(
        "ATK: " +
          playerOne.stats.attack +
          " " +
          "DEF: " +
          playerOne.stats.defense +
          " " +
          "SPD: " +
          playerOne.stats.speed
      );
    });
    $("#trissOne").on("click", function() {
      playerOne = triss;
      $("#firstChoice").text("Choose: " + playerOne.name);
      $("#statsOne").text(
        "ATK: " +
          playerOne.stats.attack +
          " " +
          "DEF: " +
          playerOne.stats.defense +
          " " +
          "SPD: " +
          playerOne.stats.speed
      );
    });
    $("#allForOneOne").on("click", function() {
      playerOne = allForOne;
      $("#firstChoice").text("Choose: " + playerOne.name);
      $("#statsOne").text(
        "ATK: " +
          playerOne.stats.attack +
          " " +
          "DEF: " +
          playerOne.stats.defense +
          " " +
          "SPD: " +
          playerOne.stats.speed
      );
    });
    $("#allmightOne").on("click", function() {
      playerOne = allMight;
      $("#firstChoice").text("Choose: " + playerOne.name);
      $("#statsOne").text(
        "ATK: " +
          playerOne.stats.attack +
          " " +
          "DEF: " +
          playerOne.stats.defense +
          " " +
          "SPD: " +
          playerOne.stats.speed
      );
    });
    $("#linkOne").on("click", function() {
      playerOne = link;
      $("#firstChoice").text("Choose: " + playerOne.name);
      $("#statsOne").text(
        "ATK: " +
          playerOne.stats.attack +
          " " +
          "DEF: " +
          playerOne.stats.defense +
          " " +
          "SPD: " +
          playerOne.stats.speed
      );
    });
    $("#gokuOne").on("click", function() {
      playerOne = goku;
      $("#firstChoice").text("Choose: " + playerOne.name);
      $("#statsOne").text(
        "ATK: " +
          playerOne.stats.attack +
          " " +
          "DEF: " +
          playerOne.stats.defense +
          " " +
          "SPD: " +
          playerOne.stats.speed
      );
    });
    $("#waluigiOne").on("click", function() {
      playerOne = waluigi;
      $("#firstChoice").text("Choose: " + playerOne.name);
      $("#statsOne").text(
        "ATK: " +
          playerOne.stats.attack +
          " " +
          "DEF: " +
          playerOne.stats.defense +
          " " +
          "SPD: " +
          playerOne.stats.speed
      );
    });
    $("#inteleonOne").on("click", function() {
      playerOne = inteleon;
      $("#firstChoice").text("Choose: " + playerOne.name);
      $("#statsOne").text(
        "ATK: " +
          playerOne.stats.attack +
          " " +
          "DEF: " +
          playerOne.stats.defense +
          " " +
          "SPD: " +
          playerOne.stats.speed
      );
    });
    $("#odimmTwo").on("click", function() {
      playerTwo = odimm;
      $("#secondChoice").text("Choose: " + playerTwo.name);
      $("#statsTwo").text(
        "ATK: " +
          playerTwo.stats.attack +
          " " +
          "DEF: " +
          playerTwo.stats.defense +
          " " +
          "SPD: " +
          playerTwo.stats.speed
      );
    });
    $("#endeavorTwo").on("click", function() {
      playerTwo = endeavor;
      $("#secondChoice").text("Choose: " + playerTwo.name);
      $("#statsTwo").text(
        "ATK: " +
          playerTwo.stats.attack +
          " " +
          "DEF: " +
          playerTwo.stats.defense +
          " " +
          "SPD: " +
          playerTwo.stats.speed
      );
    });
    $("#dekuTwo").on("click", function() {
      playerTwo = deku;
      $("#secondChoice").text("Choose: " + playerTwo.name);
      $("#statsTwo").text(
        "ATK: " +
          playerTwo.stats.attack +
          " " +
          "DEF: " +
          playerTwo.stats.defense +
          " " +
          "SPD: " +
          playerTwo.stats.speed
      );
    });
    $("#trissTwo").on("click", function() {
      playerTwo = triss;
      $("#secondChoice").text("Choose: " + playerTwo.name);
      $("#statsTwo").text(
        "ATK: " +
          playerTwo.stats.attack +
          " " +
          "DEF: " +
          playerTwo.stats.defense +
          " " +
          "SPD: " +
          playerTwo.stats.speed
      );
    });
    $("#allForOneTwo").on("click", function() {
      playerTwo = allForOne;
      $("#secondChoice").text("Choose: " + playerTwo.name);
      $("#statsTwo").text(
        "ATK: " +
          playerTwo.stats.attack +
          " " +
          "DEF: " +
          playerTwo.stats.defense +
          " " +
          "SPD: " +
          playerTwo.stats.speed
      );
    });
    $("#allmightTwo").on("click", function() {
      playerTwo = allMight;
      $("#secondChoice").text("Choose: " + playerTwo.name);
      $("#statsTwo").text(
        "ATK: " +
          playerTwo.stats.attack +
          " " +
          "DEF: " +
          playerTwo.stats.defense +
          " " +
          "SPD: " +
          playerTwo.stats.speed
      );
    });
    $("#linkTwo").on("click", function() {
      playerTwo = link;
      $("#secondChoice").text("Choose: " + playerTwo.name);
      $("#statsTwo").text(
        "ATK: " +
          playerTwo.stats.attack +
          " " +
          "DEF: " +
          playerTwo.stats.defense +
          " " +
          "SPD: " +
          playerTwo.stats.speed
      );
    });
    $("#gokuTwo").on("click", function() {
      playerTwo = goku;
      $("#secondChoice").text("Choose: " + playerTwo.name);
      $("#statsTwo").text(
        "ATK: " +
          playerTwo.stats.attack +
          " " +
          "DEF: " +
          playerTwo.stats.defense +
          " " +
          "SPD: " +
          playerTwo.stats.speed
      );
    });
    $("#waluigiTwo").on("click", function() {
      playerTwo = waluigi;
      $("#secondChoice").text("Choose: " + playerTwo.name);
      $("#statsTwo").text(
        "ATK: " +
          playerTwo.stats.attack +
          " " +
          "DEF: " +
          playerTwo.stats.defense +
          " " +
          "SPD: " +
          playerTwo.stats.speed
      );
    });
    $("#inteleonTwo").on("click", function() {
      playerTwo = inteleon;
      $("#secondChoice").text("Choose: " + playerTwo.name);
      $("#statsTwo").text(
        "ATK: " +
          playerTwo.stats.attack +
          " " +
          "DEF: " +
          playerTwo.stats.defense +
          " " +
          "SPD: " +
          playerTwo.stats.speed
      );
    });

    if (playerOne && playerTwo !== undefined) {
      $("#battleButton").removeClass("disabled");
    }

    $("#battleButton").on("click", function() {
      $("#battleArea").removeClass("hide");
    });

    //Allows User to Make a Selection
    function battle(playerOne, playerTwo) {
      //Applies "Attack" to Player One's Action
      $("#attackOne").on("click", function() {
        actionOne = "attack";
        // attackPlayer(playerOne, playerTwo, "#healthTwo");
        disableOne();
        enableTwo();
      });

      //Applies "Attack" to Player Two's Action
      $("#attackTwo").on("click", function() {
        actionTwo = "attack";
        disableTwo();
        damageStep(actionOne, actionTwo);
      });

      //Applies "Strong Attack" to Player One's Action
      $("#strAttackOne").on("click", function() {
        actionOne = "strongAttack";
        disableOne();
        enableTwo();
      });

      //Applies "Strong Attack" to Player Two's Action
      $("#strAttackTwo").on("click", function() {
        actionTwo = "strongAttack";
        disableTwo();
        damageStep(actionOne, actionTwo);
      });

      //Applies "Defend" to Player One's Action
      $("#defendOne").on("click", function() {
        actionOne = "defense";
        disableOne();
        enableTwo();
      });

      //Applies "Defend" to Player Two's Action
      $("#defendTwo").on("click", function() {
        actionTwo = "defense";
        disableTwo();
        damageStep(actionOne, actionTwo);
      });

      //Applies "Counter" to Player One's Action
      $("#counterOne").on("click", function() {
        actionOne = "counter";
        disableOne();
        enableTwo();
      });

      //Applies "Counter" to Player Two's Action
      $("#counterTwo").on("click", function() {
        actionTwo = "counter";
        disableTwo();
        damageStep(actionOne, actionTwo);
      });

      //Function to Simulate a Heavy attack with a lower chance of success
      function strAttack(playerOne, playerTwo, id) {
        let victimName = playerTwo.name;
        let attackerName = playerOne.name;
        let randomNum = Math.floor(1 + Math.random() * 50);
        let defense = playerTwo.stats.defense / 2;
        let attack = playerOne.stats.attack + 7;
        let damage = attack - defense;

        if (randomNum >= 35) {
          playerTwo.stats.health = playerTwo.stats.health - damage;
          $(id).text(`${playerTwo.stats.health}/100`);
          $("#battleLog").append(
            `<p> ${attackerName} smashed ${victimName}!</p>`
          );
        } else {
          $("#battleLog").append(`<p>${attackerName} Missed!</p>`);
          $(id).text(`${playerTwo.stats.health}/100`);
          $("#battleLog").append(
            `<p>${attackerName} missed ${victimName}!</p>`
          );
        }
        $(id).text(`${playerTwo.stats.health}/100`);

        if (playerTwo.stats.health <= 0) {
          $("#battleLog").append(
            `<p>${victimName} Has Feinted From Their Wounds!</p>`
          );
          playerTwo.stats.health = 0;
        }
      }

      //Simulates Player Two defending from a Strong Attack
      function defendSelfStr(playerOne, playerTwo, id) {
        let victimName = playerTwo.name;
        let attackerName = playerOne.name;
        let randomNum = Math.floor(1 + Math.random() * 50);
        let defense = playerTwo.stats.defense / 2 + 5;
        let attack = playerOne.stats.attack + 7;
        let damage = attack - defense;
        let health = playerTwo.stats.health;

        if (randomNum >= 35) {
          playerTwo.stats.health = health - damage;
          $(id).text(`${playerTwo.stats.health}/100`);
          $("#battleLog").append(
            `<p>${attackerName} Smashed through ${victimName}'s Defenses!</p>`
          );
        } else {
          $("#battleLog").append(`<p>${attackerName} Missed!</p>`);
          $(id).text(`${playerTwo.stats.health}/100`);
        }
        if (playerTwo.stats.health <= 0) {
          $("#battleLog").append(
            `<p>${victimName} Has Feinted From Their Wounds!</p>`
          );
          playerTwo.stats.health = 0;
        }
      }

      //Simulates an Attack from Player One
      function attackPlayer(playerOne, playerTwo, id) {
        let attackerName = playerOne.name;
        let victimName = playerTwo.name;

        let defense = playerTwo.stats.defense / 2;
        let attack = playerOne.stats.attack;
        let health = playerTwo.stats.health;
        let damage = attack - defense;

        playerTwo.stats.health = health - damage;

        if (playerTwo.stats.health <= 0) {
          $("#battleLog").append(
            `<p>${victimName} Has Feinted From Their Wounds!</p>`
          );
          playerTwo.stats.health = 0;
        }

        $("#battleLog").append(
          `<p>${attackerName} Threw Strikes at ${victimName}!</p>`
        );
        $(id).text(`${playerTwo.stats.health}/100`);
      }

      //Function for a Player to Dampen the Blow of a Regular or Strong Attack
      function defendSelf(playerOne, playerTwo, id) {
        let victimName = playerTwo.name;
        let attackerName = playerOne.name;

        let attack = playerOne.stats.attack;
        let defense = playerTwo.stats.defense / 2 + 5;
        let health = playerTwo.stats.health;
        let damage = attack + defense;

        playerTwo.stats.health = health - damage;
        $("#battleLog").append(
          `<p>${attackerName} Threw Strikes at ${victimName}'s Defenses!</p>`
        );

        if (playerTwo.stats.health <= 0) {
          $("#battleLog").append(
            `<p>${victimName} Has Feinted From Their Wounds!</p>`
          );
          playerTwo.stats.health = 0;
        }

        $(id).text(`${playerTwo.stats.health}/100`);
      }
      //Yeet the Skeet ...... ya..... and i cannot stress this enough..... YEET
      function counter(playerOne, playerTwo, id, id2) {
        let attackerName = playerOne.name;
        let victimName = playerTwo.name;

        let attack = playerOne.stats.attack;
        let health = playerTwo.stats.health;
        let damage = attack;

        let randomNum = Math.floor(1 + Math.random() * 50);

        if (randomNum >= 30) {
          playerOne.stats.health = playerOne.stats.health - damage;
          $(id).text(`${playerOne.stats.health}/100`);
          $("#battleLog").append(
            `<p>Counter Successful from ${playerTwo.name}! They now suffer an injury</p>`
          );
        } else {
          playerTwo.stats.health = health - damage;
          $(id2).text(`${playerTwo.stats.health}/100`);
          $("#battleLog").append(
            `Counter Unsuccessful from ${playerTwo.name}!`
          );
        }

        if (playerTwo.stats.health <= 0) {
          $("#battleLog").append(
            `<p>${victimName} Has Feinted From Their Wounds!</p>`
          );
          playerTwo.stats.health = 0;
          $(id2).text(`${playerTwo.stats.health}/100`);
        } else if (playerOne.stats.health <= 0) {
          $("#battleLog").append(
            `<p>${attackerName} Has Feinted From Their Wounds!</p>`
          );
          playerOne.stats.health = 0;
          $(id).text(`${playerOne.stats.health}/100`);
        }
      }

      function strCounter(playerOne, playerTwo, id, id2) {
        let attackerName = playerOne.name;
        let victimName = playerTwo.name;

        let attack = playerOne.stats.attack + 5;
        let defense = playerTwo.stats.defense / 2;
        let health = playerTwo.stats.health;
        let health2 = playerOne.stats.health;
        let damage = attack - defense;

        let randomNum = Math.floor(1 + Math.random() * 50);
        if (randomNum >= 35) {
          playerOne.stats.health = health2 - damage;
          $(id).text(`${playerOne.stats.health}/100`);
          $("#battleLog").append(
            `<p>${playerTwo.name} Returned The Strong Attack To Sender!</p>`
          );
        } else {
          playerTwo.stats.health = health - damage;
          $(id2).text(`${playerTwo.stats.health}/100`);
          $("#battleLog").append(
            `<p>Counter Unsuccessful from ${playerTwo.name}! They were smashed!</p>`
          );
        }

        if (playerTwo.stats.health <= 0) {
          $("#battleLog").append(
            `<p>${victimName} Has Feinted From Their Wounds!</p>`
          );
          playerTwo.stats.health = 0;
          $(id2).text(`${playerTwo.stats.health}/100`);
        } else if (playerOne.stats.health <= 0) {
          $("#battleLog").append(
            `<p>${attackerName} Has Feinted From Their Wounds!</p>`
          );
          playerOne.stats.health = 0;
          $(id).text(`${playerOne.stats.health}/100`);
        }
      }

      function doubleDefense(playerOne, playerTwo) {
        let defenderOne = playerOne.name;
        let defenderTwo = playerTwo.name;
        $("#battleLog").append(
          `<p>${defenderOne} and ${defenderTwo} Raise Their Fists in Defense!</p>`
        );
      }

      function doubleCounter(playerOne, playerTwo) {
        let counterOne = playerOne.name;
        let counterTwo = playerTwo.name;
        $("#battleLog").append(
          `<p>${counterOne} and ${counterTwo} Both Prepared To Redirect An Attack But ... Nothing Happened!</p>`
        );
      }

      function doubleAttack(playerOne, playerTwo, id, id2) {
        let p1 = playerOne.name;
        let p2 = playerTwo.name;

        let defense1 = playerTwo.stats.defense / 2;
        let attack1 = playerOne.stats.attack;
        let health1 = playerOne.stats.health;
        let defense2 = playerOne.stats.defense / 2;
        let attack2 = playerTwo.stats.attack;
        let health2 = playerTwo.stats.health;
        let damage1 = attack2 - defense1;
        let damage2 = attack1 - defense2;

        playerTwo.stats.health = health1 - damage1;
        playerOne.stats.health = health2 - damage2;

        if (playerTwo.stats.health <= 0) {
          $("#battleLog").append(`<p>${p1} Has Feinted From Their Wounds!</p>`);
          playerOne.stats.health = 0;
          $(id).text(`${playerTwo.stats.health}/100`);
        } else if (playerOne.stats.health <= 0) {
          playerTwo.stats.health = 0;
          $("#battleLog").append(`<p>${p2} Has Feinted From Their Wounds!</p>`);
          $(id2).text(`${playerOne.stats.health}/100`);
        }
        $(id).text(`${playerTwo.stats.health}/100`);
        $(id2).text(`${playerOne.stats.health}/100`);
        $("#battleLog").append(`<p>${p1} and ${p2} Traded Blows!</p>`);
      }

      function defendCounter(playerOne, playerTwo) {
        let defender = playerOne.name;
        let counter = playerTwo.name;
        $("#battleLog").append(
          `<p>${counter} Prepared To Redirect An Attack But ... ${defender} Raised Their Fists in Defense!</p>`
        );
      }

      //CSS Effects for a Successful Hit
      function hit(str) {
        $(str).css({
          opacity: "1"
        });
      }

      //Stores Player One's Action
      let actionOne;
      //Stores Player Two's Action
      let actionTwo;

      //Takes in decided actions and spits back a result from the altercation
      function damageStep(actionOne, actionTwo) {
        if (actionOne === "attack" && actionTwo === "attack") {
          doubleAttack(playerOne, playerTwo, "#healthOne", "#healthTwo");
          enableOne();
        } else if (actionOne === "attack" && actionTwo === "strongAttack") {
          attackPlayer(playerOne, playerTwo, "#healthTwo");
          strAttack(playerTwo, playerOne, "#healthOne");
          enableOne();
        } else if (actionOne === "attack" && actionTwo === "defense") {
          defendSelf(playerOne, playerTwo, "#health2");
          enableOne();
        } else if (actionOne === "attack" && actionTwo === "counter") {
          counter(playerOne, playerTwo, "#healthOne", "#healthTwo");
          enableOne();
        } else if (actionOne === "defense" && actionTwo === "attack") {
          defendSelf(playerTwo, playerOne, "#healthOne");
          enableOne();
        } else if (actionOne === "defense" && actionTwo === "strongAttack") {
          defendSelfStr(playerTwo, playerOne, "#healthOne");
          enableOne();
        } else if (actionOne === "defense" && actionTwo === "defense") {
          doubleDefense(playerOne, playerTwo);
          enableOne();
        } else if (actionOne === "defense" && actionTwo === "counter") {
          defendCounter(playerOne, playerTwo);
          enableOne();
        } else if (actionOne === "strongAttack" && actionTwo === "attack") {
          attackPlayer(playerTwo, playerOne, "#healthOne");
          strAttack(playerOne, playerTwo, "#healthTwo");
          enableOne();
        } else if (actionOne === "strongAttack" && actionTwo === "defense") {
          defendSelfStr(playerOne, playerTwo, "#healthTwo");
          enableOne();
        } else if (
          actionOne === "strongAttack" &&
          actionTwo === "strongAttack"
        ) {
          strAttack(playerOne, playerTwo, "#healthTwo");
          strAttack(playerTwo, playerOne, "#healthOne");
          enableOne();
        } else if (actionOne === "strongAttack" && actionTwo === "counter") {
          strCounter(playerOne, playerTwo, "#healthOne", "#healthTwo");
          enableOne();
        } else if (actionOne === "counter" && actionTwo === "attack") {
          counter(playerTwo, playerOne, "#healthTwo", "#healthOne");
          enableOne();
        } else if (actionOne === "counter" && actionTwo === "strongAttack") {
          strCounter(playerTwo, playerOne, "#healthTwo", "#healthOne");
          enableOne();
        } else if (actionOne === "counter" && actionTwo === "defense") {
          defendCounter(playerTwo, playerOne);
          enableOne();
        } else if (actionOne === "counter" && actionTwo === "counter") {
          doubleCounter(playerOne, playerTwo);
          enableOne();
        }
      }

      //Disables Player Twos Buttons
      function disableTwo() {
        $("#attackTwo").prop("disabled", true);
        $("#strAttackTwo").prop("disabled", true);
        $("#defendTwo").prop("disabled", true);
        $("#counterTwo").prop("disabled", true);
      }

      //Disables Player Ones Buttons
      function disableOne() {
        $("#attackOne").prop("disabled", true);
        $("#strAttackOne").prop("disabled", true);
        $("#defendOne").prop("disabled", true);
        $("#counterOne").prop("disabled", true);
      }

      //Enables Player One Buttons
      function enableOne() {
        $("#attackOne").prop("disabled", false);
        $("#strAttackOne").prop("disabled", false);
        $("#defendOne").prop("disabled", false);
        $("#counterOne").prop("disabled", false);

        //Stores Player One's Action
        actionOne = "";
        //Stores Player Two's Action
        actionTwo = "";
      }

      //Enables Player Two Buttons
      function enableTwo() {
        $("#attackTwo").prop("disabled", false);
        $("#strAttackTwo").prop("disabled", false);
        $("#defendTwo").prop("disabled", false);
        $("#counterTwo").prop("disabled", false);
      }
      disableTwo();
    }

    battle(playerOne, playerTwo);

    return (
      <div>
        <div className="row" id="encompassingcrap">
          <div className="col s6">
            <div id="carouselOne">
              <div className="carousel">
                <a className="carousel-item" href="#one!" samesite="none">
                  <img
                    src="https://vignette.wikia.nocookie.net/p__/images/2/22/Dragon-Ball-Goku-PNG-Free-Download.png/revision/latest/scale-to-width-down/347?cb=20181207162901&path-prefix=protagonist"
                    alt="Goku"
                    id="gokuOne"
                    className="flip"
                  />
                </a>
                <a className="carousel-item" href="#two!" samesite="none">
                  <img
                    src="https://vignette.wikia.nocookie.net/witcher/images/f/f3/Tw3_journal_mirrorman.png/revision/latest/scale-to-width-down/350?cb=20170501180556"
                    alt="Gaunter O Dimm"
                    id="odimmOne"
                    className="flip"
                  />
                </a>
                <a className="carousel-item" href="#three!" samesite="none">
                  <img
                    src="https://vignette.wikia.nocookie.net/bokunoheroacademia/images/2/22/Endeavor_Anime_Profile.png/revision/latest/scale-to-width-down/239?cb=20170906213725"
                    alt="Endeavor"
                    id="endeavorOne"
                    className="flip"
                  />
                </a>
                <a className="carousel-item" href="#four!" samesite="none">
                  <img
                    src="https://vignette.wikia.nocookie.net/bokunoheroacademia/images/5/55/All_Might_Hero_Form_Full_Body.png/revision/latest/scale-to-width-down/311?cb=20190129015644"
                    alt="Allmight"
                    id="allmightOne"
                    className="flip"
                  />
                </a>
                <a className="carousel-item" href="#five!" samesite="none">
                  <img
                    src="https://vignette.wikia.nocookie.net/bokunoheroacademia/images/f/f7/Izuku_Midoriya_Hero_Costume_Action_Pose.png/revision/latest/scale-to-width-down/350?cb=20190909030259"
                    alt="Deku"
                    id="dekuOne"
                    className="flip"
                  />
                </a>
                <a className="carousel-item" href="#six!" samesite="none">
                  <img
                    src="https://vignette.wikia.nocookie.net/zelda/images/5/57/Breath_of_the_Wild_Artwork_Link_%28Official_Artwork%29.png/revision/latest/scale-to-width-down/350?cb=20160623185226"
                    alt="Link"
                    id="linkOne"
                    className="flip"
                  />
                </a>

                <a className="carousel-item" href="#seven!" samesite="none">
                  <img
                    src="https://vignette.wikia.nocookie.net/mario/images/6/62/840px-SuperMarioParty_Waluigi.png/revision/latest/scale-to-width-down/310?cb=20190519205517"
                    alt="Waluigi"
                    id="waluigiOne"
                    className="flip"
                  />
                </a>
                <a className="carousel-item" href="#eight!" samesite="none">
                  <img
                    src="https://vignette.wikia.nocookie.net/bokunoheroacademia/images/3/32/All_For_One_Profile.png/revision/latest/scale-to-width-down/243?cb=20180528014920"
                    alt="All For One"
                    id="allForOneOne"
                    className="flip"
                  />
                </a>
                <a className="carousel-item" href="#nine!" samesite="none">
                  <img
                    src="https://cdn.bulbagarden.net/upload/thumb/e/e4/818Inteleon.png/250px-818Inteleon.png"
                    alt="Intellion"
                    id="inteleonOne"
                    className="flip"
                  />
                </a>
                <a className="carousel-item" href="#ten!" samesite="none">
                  <img
                    src="https://vignette.wikia.nocookie.net/witcher/images/2/27/Triss-TW3-new-render.png/revision/latest/scale-to-width-down/313?cb=20160402173701"
                    alt="Triss"
                    id="trissOne"
                  />
                </a>
              </div>
              <a className="waves-effect waves-light btn red" id="firstChoice">
                Choose:
              </a>
              <div id="statsOne" className="white-text"></div>
            </div>
          </div>
          <div className="col s6">
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
                    className="flip"
                  />
                </a>
              </div>
              <a
                className="waves-effect waves-light btn blue"
                id="secondChoice"
              >
                Choose:
              </a>
              <div id="statsTwo" className="white-text"></div>
            </div>
          </div>
        </div>
        <a
          className="waves-effect  btn deep-purple darken-3 disabled"
          id="battleButton"
        >
          BATTLE
        </a>
        <div id="battleArea" className="hide">
          <div id="caseOne">
            <progress id="healthOne" value="100" max="100"></progress>
            <img
              id="playerOne"
              src="https://vignette.wikia.nocookie.net/mario/images/6/62/840px-SuperMarioParty_Waluigi.png/revision/latest/scale-to-width-down/310?cb=20190519205517"
              alt="player one"
              className="flip"
            />
            <button id="attackOne" className="red btn">
              Attack
            </button>
            <button id="strAttackOne" className="red btn">
              Strong Attack
            </button>
            <button id="defendOne" className="red btn">
              Defend
            </button>
            <button id="counterOne" className="red btn">
              Evade
            </button>
          </div>
          <div id="battleLog">
            <h3 className="white-text">BATTLE LOG</h3>
          </div>
          <div id="caseTwo">
            <progress id="healthTwo" value="100" max="100"></progress>
            <img
              id="playerTwo"
              src="https://vignette.wikia.nocookie.net/mario/images/6/62/840px-SuperMarioParty_Waluigi.png/revision/latest/scale-to-width-down/310?cb=20190519205517"
              alt="player two"
            />
            <button id="attackTwo" className="blue btn">
              Attack
            </button>
            <button id="strAttackTwo" className="blue btn">
              Strong Attack
            </button>
            <button id="defendTwo" className="blue btn">
              Defend
            </button>
            <button id="counterTwo" className="blue btn">
              Evade
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default PlayerOneSelect;
