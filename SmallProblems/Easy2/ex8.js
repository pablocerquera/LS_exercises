function oddities(arr) {
  let oddArray = [];
  for (let idx = 0; idx < arr.length; idx++) {
    if (idx % 2 === 0) {
      oddArray.push(arr[idx]);
    }
  }
  return oddArray;
}


console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []