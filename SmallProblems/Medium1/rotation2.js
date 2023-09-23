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

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917