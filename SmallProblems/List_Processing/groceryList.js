function buyFruit(arr) {
  return arr.map(subArr => getNumber(subArr)).flat().filter(ele => ele.length);
}
function getNumber(arr) {
  let word = arr[0] + ' ';
  return word.repeat(arr[1]).split(' ');
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]