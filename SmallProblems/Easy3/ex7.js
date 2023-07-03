function twice(num) {
  let string = num.toString();
  let mid = string.length / 2;
  let fHalf = string.slice(0, mid);
  let sHalf = string.slice(mid);
  fHalf !== sHalf ? console.log(Number(string) * 2) : console.log(Number(string));
}

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676