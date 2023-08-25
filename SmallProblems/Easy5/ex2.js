function union(firstArr, secondArr) {
  let unifide = [];


  firstArr.forEach(ele => {
    unifide.push(ele);
  });

  secondArr.forEach(ele => {
    if (!unifide.includes(ele)) {
      unifide.push(ele);
    }
  });
  return unifide;
}

console.log(union( [3, 6, 9], [1, 3, 5]));    // [1, 3, 5, 6, 9]