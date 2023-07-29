function stringToInteger(str) {
  return str * 1;
}

console.log(stringToInteger('123'));
console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true
console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("-570") === -570); // logs true
console.log(stringToInteger("+100") === 100); // logs true