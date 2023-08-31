function sequence(number) {
  let arr = [];

  for (let start = 1; start <= number; start++) {
    arr.push(start);
  }
  return arr;
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]