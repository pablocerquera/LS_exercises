function runningTotal(arr) {
  let newArr = [];
  let sum = 0;

  for (let idx = 0; idx < arr.length; idx++) {
    newArr.push(sum += arr[idx]);
  }
  console.log(newArr);
}

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);
runningTotal(['4', 'w', 9]);                   // []