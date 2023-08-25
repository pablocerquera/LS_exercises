function interleave(arr1, arr2) {
  let together = [];
  let idx = 0;

  while (idx < arr2.length) {
    together.push(arr1[idx], arr2[idx]);

    idx += 1;
  }
  return together;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c',]));    // [1, "a", 2, "b", 3, "c"]

function interleave2(arr1, arr2) {
  let together = [];

  arr1.forEach((_, idx) => {
    together.push(arr1[idx], arr2[idx]);
  });
  return together;
}

console.log(interleave2([1, 2, 3], ['a', 'b', 'c',]));