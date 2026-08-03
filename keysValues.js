const person = {
  name: "Labib",
  age: 12,
  location: "Jassore",
};
console.log(Object.keys(person));
console.log(Object.values(person));

const entries = Object.entries(person);
for (let entry of entries) {
  [key, values] = entry;
  console.log(key, values);
}
