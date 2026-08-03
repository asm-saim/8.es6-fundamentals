//array destructuring:
const numbers = [34, 6, 22, 44, 72];
const [first, second, , , last] = numbers;
console.log(first, second, last);

//object destructuring:
const info = {
  name: "jasim",
  age: 23,
  location: "USA",
  device: {
    laptop: "lenovo",
    cell: "motorola",
    watch: "protek",
  },
};
const laptopUse = info.device.laptop;
const {
  name,
  age: boyosh,
  location,
  device: { laptop, cell, watch },
} = info;
console.log(name, boyosh, laptop, location);
