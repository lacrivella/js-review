const createDog = (name, age, weight) => ({
  name,
  age,
  weight
});

const dog = createDog('Nolan', 14, '40lbs');
console.log(dog);

module.exports = createDog