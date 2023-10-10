/*
problem:
  input: number
  output: number

  take a number and return the next higher number that fitsthe rules
  number needs to be greater then current
  number needs to be multiple of 7
  number cannot have any duplicates
  number needs to be odd.

example:
  featured(12);           // 21
  featured(20);           // 21
  featured(21);           // 35
  featured(997);          // 1029
  featured(1029);         // 1043
  featured(999999);       // 1023547
  featured(999999987);    // 1023456987
  featured(9876543186);   // 9876543201
  featured(9876543200);   // 9876543201
  featured(9876543201);   // "There is no possible number that fulfills
    those requirements."

data:
  numbers to string (to check for duplicates)
  string to number (to return a number)

algo:
  take number
    iterate through multiples of 7
    at over iteration check if valid
      of it more then given number
      no duplicates
        convert to string
        iterate through string
      is it odd
      if less then or equal to 9876543201
    return number

code:
*/
function checkDup(number) {
  const numString = String(number);
  const numArray = numString.split('');
  for (let idx = 0; idx < numArray.length; idx++) {
    const reg = new RegExp(`${numArray[idx]}`, 'g');
    if (numString.match(reg).length > 1) return false;
  }
  return true;
}

function featured(number) {
  let feature = 7;
  if (number >= 9876543201) return "There is no possible number that fulfills those requirements.";
  for (let feature = 7; feature <= 9876543201; feature += 7) {
    if (feature <= number) continue;
    if (!checkDup(feature)) continue;
    if (feature % 2 === 0) continue;
    return feature;
  }
  return feature;
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."