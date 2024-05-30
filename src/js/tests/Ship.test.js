import Ship from '../modules/Ship';

describe('instantiation tests', () => {
  test('creates a Ship with length of 3', () => {
    const sh = new Ship(3);
    expect(sh.length()).toBe(3);
  });

  test('creates a Ship with length of 5', () => {
    const sh = new Ship(5);
    expect(sh.length()).toBe(5);
  });
  test('Ship starts afloat', () => {
    const sh = new Ship(3);

    expect(sh.isSunk()).toBe(false);
  });
});

describe('hit method tests', () => {
  test('hit method adds 1 to timesHit property of Ship', () => {
    const sh = new Ship(5);
    sh.hit();

    expect(sh.timesHit()).toBe(1);
  });

  test('hit method works multiple times', () => {
    const sh = new Ship(5);
    sh.hit();
    sh.hit();
    sh.hit();

    expect(sh.timesHit()).toBe(3);
  });

  test('hit method works to sink Ship', () => {
    const sh = new Ship(3);
    sh.hit();
    sh.hit();
    sh.hit();

    expect(sh.isSunk()).toBe(true);
  });
});
