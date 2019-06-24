const { getState, updateState } = require('./store');

//test
describe('getState function', () => {
  //individual test
  it('returns a state for object', () => {
    const state = getState();
    expect(state).toEqual({
      shirts: 5,
      pants: 10,
      toys: 100,
      shoes: 1,
      apples: 9
    });
  });
});

//test
describe('updateState function', () => {
  //individual test
  it('can update', () => {
    updateState('shirts', 30)
    expect(getState()).toEqual({
      shirts: 30,
      pants: 10,
      toys: 100,
      shoes: 1,
      apples: 9
    });
  });
});