function spread(value) {
  let newValue = [...value, 86, 789, 34];
  return newValue;
}
console.log(spread([23, 56, 89, 23]));

//
function studentPayment(name, amount) {
  let info = ` Hello ${name}!
Your paid amount is ${amount}`;
  return info;
}
console.log(studentPayment("Ekram", 4500));
