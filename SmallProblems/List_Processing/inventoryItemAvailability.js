let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
  { id: 105, movement: 'in',  quantity: 10 },
  { id: 102, movement: 'out', quantity: 17 },
  { id: 101, movement: 'in',  quantity: 12 },
  { id: 103, movement: 'out', quantity: 20 },
  { id: 102, movement: 'out', quantity: 15 },
  { id: 105, movement: 'in',  quantity: 25 },
  { id: 101, movement: 'out', quantity: 18 },
  { id: 102, movement: 'in',  quantity: 22 },
  { id: 103, movement: 'out', quantity: 15 }, ];

function isItemAvailable(num, obj) {
  let sum = 0;
  transactionsFor(num, obj).forEach(ele => {
    if (ele.movement === 'in') {
      sum += ele.quantity;
    } else {
      sum -= ele.quantity;
    }
  });
  return sum > 0;
}

function transactionsFor(num, obj) {
  return obj.filter(ele => (ele['id'] === num));
}

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true