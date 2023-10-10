function fridayThe13ths(year) {
  const date = new Date (`${year}-1-13`);
  let count = 0;
  for (let month = 0; month < 12; month++) {
    date.setMonth(month);
    if (date.getDay() === 5) {
      count += 1;
      continue;
    }
  }
  return count;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2