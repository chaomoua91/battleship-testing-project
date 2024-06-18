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

  get length() {
    return this.#length;
  }

  get hits() {
    return this.#hits;
  }
}
