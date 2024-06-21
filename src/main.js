import _, { ceil } from "lodash";
import "./style.css";
import Player from "./lib/player";
import {
  attackRandom,
  createGrid,
  displayWinner,
  placeRandom,
} from "./lib/gameUtils";

const buttonContainer = document.querySelector(".start-buttons");
const restartContainer = document.querySelector(".restart-buttons");

const randomButton = document.querySelector("#random-place");
const startButton = document.querySelector("#start-game");
const restartButton = document.querySelector("#restart");
const playAgainButton = document.querySelector("#play-again");

const winnerDialog = document.querySelector("#winner-dialog");

const playGrid = document.querySelector("#player-grid");
const npcGrid = document.querySelector("npc-grid");

let humanPlayer;
let npcPlayer;

function placeShips() {
  humanPlayer = new Player("human");
  npcPlayer = new Player("computer");

  placeRandom(humanPlayer);
  placeRandom(npcPlayer);

  playGrid.innerHTML = "";
  npcGrid.innerHTML = "";

  createGrid(playerGrid, humanPlayer);
  createGrid(npcGrid, npcPlayer);
}
