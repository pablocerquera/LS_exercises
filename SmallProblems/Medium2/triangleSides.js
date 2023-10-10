/*
Problem:
  intput: number
  output: string

Example:


Data:


Algo:


Code:


*/
function checkNumbers(first, second, third) {
  let array = [first, second, third];
  array.sort();
  return ((array[0] + array[1]) > array[2]);
}

function triangle(first, second, third) {
  if ([first, second, third].includes(0)) return 'invalid';

  switch (true) {
    case first === second && second === third:
      return 'equilateral';
    case first === second || first === third || second === third:
      return checkNumbers(first, second, third) ? 'isosceles' : 'invalid';
    default:
      return checkNumbers(first, second, third) ? 'scalene' : 'invalid';
  }
}


console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"