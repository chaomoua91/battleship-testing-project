export default class Ship {
  #length;
  #hits;

  constructor(length) {
    this.#length = length;
    this.#hits = 0;
  }

  //   hit() {
  //     this.#hits += 1;
  //   }

  //   /** @returns {boolean} */
  //   isSunk() {
  //     return this.#hits >= this.#length;
  //   }

  //   /** @returns {number} */
  //   get length() {
  //     return this.#length;
  //   }

  //   /** @returns {number} */
  //   get hits() {
  //     return this.#hits;
  //   }
}
