import Ship from './Ship';

function doShipsOverlap() {
  return false;
}

class Gameboard {
  board = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  placeShip(xCoord, yCoord, size, rotation = 'verticle') {
    const ship = new Ship(size);
    for (let i = 0; i < size; i += 1) {
      if (rotation === 'horizontal') {
        // check to see if placement will be outside of board bounds
        if (xCoord + size > 10) {
          return false;
        }
        if (doShipsOverlap()) {
          return false;
        }
        this.board[yCoord][xCoord + i] = ship;
      } else {
        // check to see if placement will be outside of board bounds
        if (yCoord + size > 10) {
          return false;
        }
        if (doShipsOverlap()) {
          return false;
        }
        this.board[yCoord + i][xCoord] = ship;
      }
    }
    return true;
  }
}

export default Gameboard;
