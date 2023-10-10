/*
prob:
  input: 2 arrays
  output: 1 sorted array

  can not mutate the original arrays
  need to sort without sort method
  sort in ascending order
  sort one element at a time

  according to the example the will always be under 10

exa:


data:
  array to object back to array

algo:
  take the arrays
  create an object that takes the numbers and counts how many numbers
  there are 1-0
  iterate through the object and push the key however many times it appears.

code:

*/

// function merge(arr1, arr2) {
//   const obj = {};
//   let sortedArray = [];
//   for (let idx = 0; idx < arr1.length; idx++) {
//     obj[arr1[idx]] = (obj[arr1[idx]] + 1) || 1;
//   }

//   for (let idx = 0; idx < arr2.length; idx++) {
//     obj[arr2[idx]] = (obj[arr2[idx]] + 1) || 1;
//   }

//   for (const number in obj) {
//     for (let count = 0; count < obj[number]; count++) {
//       sortedArray.push(Number(number));
//     }
//   }
//   console.log(obj);
//   return sortedArray;
// }

function merge(array1, array2) {
  let copy1 = array1.slice();
  let copy2 = array2.slice();
  let result = [];

  while (copy1.length > 0 && copy2.length > 0) {
    result.push(copy1[0] <= copy2[0] ? copy1.shift() : copy2.shift());
  }

  return result.concat(copy1.length === 0 ? copy2 : copy1);
}

// console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([9], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]