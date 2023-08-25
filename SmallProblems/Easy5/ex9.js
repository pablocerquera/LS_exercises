let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck', 'motorcycle', 'motorcycle', 'car', 'truck'];

let list = {};

function countOccurrences(obj) {
  for (let item in obj) {
    console.log(`${item} => ${list[item]}`);
  }
}

function countIncrement(array) {
  array.forEach((_, idx) => {
    list[array[idx]] = list[array[idx]] || 0;
    list[array[idx]] += 1;
  });

  // for (let idx = 0; idx < array.length; idx += 1) {
  //   list[array[idx]] = list[array[idx]] || 0;
  //   list[array[idx]] += 1;
  // }
  countOccurrences(list);
}

countIncrement(vehicles);


