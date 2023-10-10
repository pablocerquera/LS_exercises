function isValid(array) {
  if (array.includes(0)) return false;

  if (array.reduce((accu, current) => accu + current) !== 180) return false;

  return true;
}

function triangle(first, second, third) {
  let angles = [first, second, third];
  switch (true) {
    case angles.includes(90):
      return isValid(angles) ? 'right' : 'invalid';
    case angles.every(ele => ele < 90):
      return isValid(angles) ? 'acute' : 'invalid';
    default:
      return isValid(angles) ? 'obtuse' : 'invalid';
  }
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"