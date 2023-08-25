function dms(num) {
  let fixedNum = range(num);
  let degrees = fixedNum;
  let minutes = degrees * 100 % 100;

  minutes = minutes / 100 * 60;

  let seconds = minutes * 100 % 100;

  seconds = seconds / 100 * 60;

  return `${Math.trunc(degrees)}°${padZero(Math.trunc(minutes))}'${padZero(Math.trunc(seconds))}"`;
}

function padZero(number) {
  let string = number.toString();
  return string.length < 2 ? ('0' + string) : string;
}


function range(int) {
  let number = int;
  while (number > 360) {
    number = Math.round(number) - 360;
  }
  while (number < 0) {
    number = Math.round(number) + 360;
  }
  return number;
}


console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"

console.log(dms(-1));   // 359°00'00"
console.log(dms(400));  // 40°00'00"
console.log(dms(-40));  // 320°00'00"
console.log(dms(-420)); // 300°00'00"