const multiplyAllPairs = (arr1, arr2) => {
  let mixedArr = [];
  let mixed = arr1.map(ele1 => arr2.map(ele2 => ele1 * ele2));
  mixed.forEach(ele1 => ele1.forEach(ele2 => mixedArr.push(ele2)));
  return mixedArr.sort((a,b) => a - b);
};
console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]