/*
problem:
  input: array
  output: sorted array

  solution needs to be recursive

*/





function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }
  let copy1 = array.slice(0, array.length / 2);
  let copy2 = array.slice(array.length / 2);
  let result = [];

  result.push(mergeSort(copy1)[0] <= mergeSort(copy2)[0] ? copy1.shift() : copy2.shift());

  return result.concat(copy1, copy2);
}

console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
// mergeSort([5, 3]);                 // [3, 5]
// mergeSort([6, 2, 7, 1, 4]);        // [1, 2, 4, 6, 7]

// mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']);
// // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

// mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]);
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]