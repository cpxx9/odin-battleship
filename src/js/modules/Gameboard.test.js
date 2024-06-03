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
    expect(gb.board[0][0]).toEqual(new Ship(3));
    expect(gb.board[0][1]).toEqual(new Ship(3));
    expect(gb.board[0][2]).toEqual(new Ship(3));
  });

  test('ships take up appropriate space v2', () => {
    const gb = new Gameboard();
    gb.placeShip(5, 5, 3, 'horizontal');
    expect(gb.board[5][5]).toEqual(new Ship(3));
    expect(gb.board[5][6]).toEqual(new Ship(3));
    expect(gb.board[5][7]).toEqual(new Ship(3));
  });

  test('ships can be placed rotated', () => {
    const gb = new Gameboard();
    gb.placeShip(0, 0, 3, 'verticle');
    console.log(gb.board);

    expect(gb.board[0][0]).toEqual(new Ship(3));
    expect(gb.board[1][0]).toEqual(new Ship(3));
    expect(gb.board[2][0]).toEqual(new Ship(3));
  });

  test('ships can be placed rotated v2', () => {
    const gb = new Gameboard();
    gb.placeShip(5, 5, 3, 'verticle');

    expect(gb.board[5][5]).toEqual(new Ship(3));
    expect(gb.board[6][5]).toEqual(new Ship(3));
    expect(gb.board[7][5]).toEqual(new Ship(3));
  });

  test('ships cannot be placed off the edge', () => {
    const gb = new Gameboard();
    expect(gb.placeShip(9, 0, 2, 'horizontal')).toBe('Invalid placement');
  });
});
