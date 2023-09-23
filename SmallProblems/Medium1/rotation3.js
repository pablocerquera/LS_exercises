function appendLast(array, lastEle) {
  array.push(lastEle);
  return array;
}

function rotateRightmostDigits(number, limit) {
  let numberArray = String(number).split('');
  let getNumber = numberArray.length - limit;
  let endNumber = numberArray.splice(getNumber, 1);

  return Number(appendLast(numberArray, endNumber).join(''));
}


function maxRotation(number) {
  let numberString = String(number);
  let newNumber = number;
  for (let idx = numberString.length; idx > 0; idx--) {
    newNumber = rotateRightmostDigits(newNumber, idx);
  }
  return newNumber;
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845