const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


function signedIntegerToString(number) {
  switch (Math.sign(number)) {
    case -1:
      return `-${integerToString(-number)}`;
    case +1:
      return `+${integerToString(number)}`;
    default:
      switch (1 / Math.sign(number)) {
        case -Infinity:
          return `-${integerToString(number)}`;
        default:
          return integerToString(number);
      }
  }
}

function integerToString(int) {
  let string = "";

  do {
    let remainder = int % 10;
    int = Math.floor(int / 10);

    string = DIGITS[remainder] + string;
  } while (int > 0);

  return string;
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");
console.log(signedIntegerToString(-0) === "-0");