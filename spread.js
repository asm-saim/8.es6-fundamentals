// function spread(value) {
//   let newValue = [...value, 86, 789, 34];
//   return newValue;
// }
// console.log(spread([23, 56, 89, 23]));

// // find out the max us  ing max method.
// const numbers = [23, 56, 34, 22, 455, 223];

// //Logically , max only iterate on numbers, on array, it won't work. we need to use spread
// const maxNum = Math.max(...numbers);
// console.log(maxNum);

//Rest operator:
function restOp(a, b, ...restOperator) {
  //   console.log(restOperator);
  let sum = 0;
  for (let i of restOperator) {
    sum += i;
  }
  return a + b + sum;
}
console.log(restOp(20, 30, 67, 4, 2, 566, 32, 11, 4, 55, 2));
