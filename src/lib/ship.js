export default class Ship {
  #length;
  #hits;

  constructor(length) {
    this.#length = length;
    this.#hits = 0;
  }
  get length() {
    return this.#length;
  }

  hit() {
    this.#hits += 1;
  }

  get hits() {
    return this.#hits;
  }
  isSunk() {
    return this.#hits >= this.#length;
  }
}
