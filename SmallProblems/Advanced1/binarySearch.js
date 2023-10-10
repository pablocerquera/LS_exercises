/*
problem:
  input: array, string/number
  output: number

  find middle element
  compare search item to middle element
  if item is less then middle element delete second half
  else delete first half
  array will always be sorted
  there will only be one search item
  return the index that the item is found on
  if not found return -1

example:

data:
  Array
  Number

algo:
  take both arguments
  start while loop
    get middle element
    if search item equal to idx return idx
    else continue loop

code:
*/

let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];

// eslint-disable-next-line max-lines-per-function
function binarySearch(array, item) {
  let index = 0;
  let partition = array.slice();
  let midPoint = Math.floor(Math.floor(partition.length / 2));

  while (true) {
    midPoint = Math.floor(partition.length / 2);
    if (partition[midPoint] === item) {
      index += partition.slice(0, midPoint).length;
      break;
    }
    if (partition.length < 2) {
      index = -1;
      break;
    }
    if (item > partition[midPoint]) {
      let right = partition.slice(midPoint);
      index += partition.slice(0, midPoint).length;
      partition = right;
    } else if (item < partition[midPoint]) {
      let left = partition.slice(0, midPoint);
      partition = left;
    } else {
      index = -1;
      break;
    }

  }
  return index;
}

console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));             // 0
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6