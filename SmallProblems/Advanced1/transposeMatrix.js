/*
Problem:
  input: nested array
  output: nested array

  take an array with 3 arrays inside it and move all the first indexes of each
  array and move them into their own array. do that for every index. second to
  the second array and third to the third.

  needs to be a copy can not effect original array.

Example:
  [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
  [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

Data:
  nested arrays

Algo:
  take nested array
  iterate through array
  reasign first index of every array to a new array
*/


const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

function transpose(array) {
  let newArray = [[], [], []];
  for (let idx2 = 0; idx2 < array.length; idx2++) {
    for (let idx1 = 0; idx1 < array.length; idx1++) {
      newArray[idx2].push(array[idx1][idx2]);
    }
  }
  return newArray;
}


let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]