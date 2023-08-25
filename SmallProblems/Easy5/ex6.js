function multiplicativeAverage(arr) {
  let mulit = arr.reduce((accum, current) => accum * current, 1) / arr.length;
  return mulit.toFixed(3).toString();
}

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"