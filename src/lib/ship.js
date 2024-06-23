export default class Ship {
  #length;
  #hits;

  constructor(length) {
    this.#length = length;
    this.#hits = 0;
  }

  hit() {
    this.#hits += 1;
  }

  isSunk() {
    return this.#hits >= this.#length;
  }

  get length() {
    return this.#length;
  }

  get hits() {
    return this.#hits;
  }
}
