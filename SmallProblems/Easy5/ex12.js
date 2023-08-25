function afterMidnight(nightTime) {
  let timeArr = nightTime.split(':');
  let hour = timeArr[0];
  let minute = timeArr[1];

  let total = ((hour * 60) + Number(minute)) % 1440;

  return total;
}

function beforeMidnight(dayTime) {
  let timeArr = dayTime.split(':');
  let hour = timeArr[0];
  let minute = timeArr[1];

  let total = 1440 - (hour * 60) - minute;

  if (total < 0 || total > 1439) {
    return 0;
  }


  return total;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);