/* input: array
  output: the original array split in two arrays contained in an array.

  the new array need to have the first half of elements in the first array and
  the second half in the second array.

  if the number of elements is odd put the middle element in the first array.

  if the array only has one element return that element in the first array and
  and return an empty array.

  if the array given is empty return two empty arrays.
*/


function halvsies(array) {
  let mainArray = [];
  let arr1 = [];
  let arr2 = [];

  array.forEach((ele, idx) => {
    if (idx < Math.ceil(array.length / 2)) {
      arr1.push(ele);
    } else {
      arr2.push(ele);
    }
  });

  mainArray.push(arr1, arr2);
  return mainArray;
}

console.log(halvsies([1, 2, 3, 4]));
console.log(halvsies([1, 5, 2, 4, 3]));
console.log(halvsies([5]));
console.log(halvsies([]));
console.log(halvsies(['1', 'fao', 'wow']));