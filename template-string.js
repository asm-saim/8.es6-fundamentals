function template(value) {
  return `this is template ${value}`;
}
console.log(template("String"));

//
function studentPayment(name, amount) {
  let info = ` Hello ${name}!
Your paid amount is ${amount}`;
  return info;
}
console.log(studentPayment("Ekram", 4500));
