function penultimate(string) {
  let array = string.split(' ');
  let newArray = array.pop();
  return array.pop();
}


console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true