import _ from "lodash";
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
