import GameBoard from "./gameboard";

export default class Player {
  #board;

  #type;

  constructor(type) {
    this.#board = new GameBoard();
    this.#type = type;
  }

  get gameboard() {
    return this.#board;
  }

  get type() {
    return this.#type;
  }
}
