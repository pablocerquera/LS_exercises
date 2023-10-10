function makeArray(number) {
  let numberArray = [];
  for (let count = number; count > 0; count--) {
    numberArray.push(count);
  }
  return numberArray;
}

function sumSquareDifference(number) {
  let numberArray = makeArray(number);

  let sumSquare = numberArray.slice().reduce((acc, curr) => acc + curr) ** 2;

  let squareSum = numberArray.map(num => num ** 2)
    .reduce((acc, current) => acc + current);

  return sumSquare - squareSum;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150