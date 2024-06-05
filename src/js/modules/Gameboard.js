import Ship from './Ship';

function doShipsOverlap(xCoord, yCoord, size, rotation, board) {
  for (let i = 0; i < size; i += 1) {
    if (rotation === 'horizontal') {
      // check for placement being out of board bounds
      if (xCoord + size > 10) {
        return true;
      }
      // check for another ship being there already
      if (board[parseInt(yCoord, 10)][xCoord + i]) {
        return true;
      }
    } else {
      console.log(board);
      // check for placement being out of board bounds
      if (yCoord + size > 10) {
        return true;
      }
      // check for another ship being there already
      if (board[yCoord + i][xCoord]) {
        return true;
      }
    }
  }
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
    if (doShipsOverlap(xCoord, yCoord, size, rotation, this.board)) {
      return false;
    }
    const ship = new Ship(size);
    for (let i = 0; i < size; i += 1) {
      if (rotation === 'horizontal') {
        this.board[yCoord][xCoord + i] = ship;
      } else {
        this.board[yCoord + i][xCoord] = ship;
      }
    }
    return true;
  }
}

export default Gameboard;
