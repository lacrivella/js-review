// import createDog from '.index.js';
const createDog = require('./index');

//test suite
describe('dog create function', () => {
  //individual tests
  it('returns a dog object', () => {
    const dog = createDog('Nolan', 14, '40lbs');
    expect(dog).toEqual({
      name: 'Nolan',
      age: 14,
      weight: '40lbs'
    });
  });
});