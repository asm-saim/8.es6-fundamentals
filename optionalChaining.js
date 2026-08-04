const user = {
  name: "Peter",
  age: 62,
  location: "NYC",
  "height-feet": 6.2,
  marks: {
    math: 78,
    statistics: 68,
    chemistry: 84,
  },
};

//optional chaining:
console.log(user?.marks?.botany);

//bracket notation:
console.log(user["height-feet"]);
