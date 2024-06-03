import Gameboard from './Gameboard';
import Ship from './Ship';

describe('ship placing tests', () => {
  test('place ship at 0,0 position', () => {
    const gb = new Gameboard();
    gb.placeShip(0, 0, 3);
    expect(gb.board[0][0]).toEqual(new Ship(3));
  });

  test('place ship at 5,9 position', () => {
    const gb = new Gameboard();
    gb.placeShip(5, 9, 2);
    expect(gb.board[9][5]).toEqual(new Ship(2));
    console.log(gb.board);
  });
});
