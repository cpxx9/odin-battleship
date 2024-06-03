import Gameboard from './Gameboard';
import Ship from './Ship';

describe('ship placing tests', () => {
  test('place ship at 0,0 position', () => {
    const gb = new Gameboard();
    gb.placeShip(0, 0, 3, 'horizontal');
    expect(gb.board[0][0]).toEqual(new Ship(3));
  });

  test('place ship at 5,9 position', () => {
    const gb = new Gameboard();
    gb.placeShip(5, 9, 2, 'horizontal');
    expect(gb.board[9][5]).toEqual(new Ship(2));
  });

  test('ships take up appropriate space', () => {
    const gb = new Gameboard();
    gb.placeShip(0, 0, 3, 'horizontal');
    console.log(gb.board);
    expect(gb.board[0][0]).toEqual(new Ship(3));
    expect(gb.board[0][1]).toEqual(new Ship(3));
    expect(gb.board[0][2]).toEqual(new Ship(3));
  });
});
