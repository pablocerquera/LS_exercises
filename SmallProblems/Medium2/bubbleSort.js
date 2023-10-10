// eslint-disable-next-line max-lines-per-function
function bubbleSort(array) {
  let idx = 0;
  let noCount = 0;
  while (true) {
    if (noCount === array.length - 1) break;
    if (idx === array.length - 1) {
      idx = 0;
      noCount = 0;
      continue;
    }
    let first = array[idx];
    let second = array[idx + 1];

    if (first > second) {
      [array[idx], array[idx + 1]] = [second, first];
    } else {
      noCount += 1;
    }
    idx += 1;
  }
  return array;
}


let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]