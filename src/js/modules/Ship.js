class Ship {
  #timesHit = 0;

  #isSunk = false;

  constructor(size) {
    this.length = size;
  }

  hit() {
    this.#timesHit += 1;
  }
}

export default Ship;
