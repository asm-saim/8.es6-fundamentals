//normal function:
function callName(name) {
  return `hello ${name}`;
}
console.log(callName("Kalam"));

//arrow function:
//exclusive : multiple line arrow function
// we use {} and a paremthesis, for multiple parameter or empty parameter
const callingName = (name) => {
  return `hello ${name}`;
};

//inclusive : single line arrow, no need return keyword, no need {}
const calledName = (name) => `Hello ${name}`;
console.log(callName("Jasim"));

//this keyword:
//In traditional function this keyword refers parent object. But, this keyword is not a workable keyword in arrow function,

const info = {
  name: "jabir",
  age: 45,
  showName: function takeName() {
    return this.name;
  },
  showAge: () => {
    return this.age;
  },
};
console.log(info.showName());
console.log(info.showAge()); //wii give undefined, cause this is not used in arrow.

//hoisting is possible in traditional fumction , but not in arrow function.