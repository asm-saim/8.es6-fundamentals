//keys, values, entries:
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

//delete, seal, freeze:

//delete:
// delete person.name;

//seal: delete, add not possible, edit possible
Object.seal(person);

//freeze: delete, add, edit not possible
Object.freeze(person);
