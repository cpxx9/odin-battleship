import Ship from '../modules/Ship';

describe('instantiation tests', () => {
  test('creates a Ship with length of 3', () => {
    const sh1 = new Ship(3);
    expect(sh1.length()).toBe(3);
  });

  test('creates a Ship with length of 5', () => {
    const sh2 = new Ship(5);
    expect(sh2.length()).toBe(5);
  });
});

// describe('hit method tests', () => {
//   const ship = new Ship
//   test('')
// });
