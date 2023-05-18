let nums = [1,2,1,3,4,5,6]
//some
let isGreaterThan5 = nums.some((n)=> n > 5);
console.log(isGreaterThan5)
let isGreaterThan6 = nums.some((n) => n > 6);
console.log(isGreaterThan6)

let allGreaterThan0 = nums.every((x) => x > 0);
console.log(allGreaterThan0);

let allGreaterThan5 = nums.every((x) => x > 5);
console.log(allGreaterThan5);


let stock = [
  {item: 'kletchup', quantity: 30},
  { item: 'banana', quantity: 10 },
  { item: 'orange', quantity: 5 },
]

console.log(stock)

let fruit = stock.find(xx => xx.item == 'orange');
console.log(fruit)

console.log(fruit.quantity);


let banana = stock.findIndex( gg => gg === 'banana');
console.log(banana)
