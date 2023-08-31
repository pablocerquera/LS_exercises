function swapName(name) {
  let nameArray = name.split(' ');
  return nameArray[nameArray.length - 1] + ', ' + nameArray.slice(0, nameArray.length - 1).join(' ');
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
console.log(swapName('Karl Oskar Henriksson Ragvals'));    // "Ragvals, Karl Oskar Henriksson"