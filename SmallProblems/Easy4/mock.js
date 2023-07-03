

let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let objKeys = Object.keys(obj);
let keyArr = objKeys.map(x => x.toUpperCase());

console.log(keyArr.sort());


// let arr = ['clare', 'grace', 'trevor'];

// let newArr = arr.map((name) => {
//   return console.log(name);
// });

// console.log(newArr);

// console.log(arr);

let num = 5;

function myFunc() {
  console.log(num);
  let num = 10;
}

myFunc();
console.log(num);
