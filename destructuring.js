//array destructuring:
const numbers = [34, 6, 22, 44, 72];
const [first, second, , , last] = numbers;
console.log(first, second, last);

//object destructuring:
const info = {
  name: "jasim",
  age: 23,
  location: "USA",
};

const { name, age: boyosh, location } = info;
console.log(name, boyosh, location);
