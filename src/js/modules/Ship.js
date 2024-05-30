class Ship {
  #timesHit = 0;

  #isSunk = false;

  #length;

  constructor(size) {
    this.#length = size;
  }

  hit() {
    this.#timesHit += 1;
    if (this.#timesHit >= this.#length) {
      this.#isSunk = true;
    }
  }

  timesHit() {
    return this.#timesHit;
  }

  isSunk() {
    return this.#isSunk;
  }

  length() {
    return this.#length;
  }
}

export default Ship;
