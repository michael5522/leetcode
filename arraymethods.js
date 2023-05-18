let nums = [1,2,1,3,4,5,6]
//some
let isGreaterThan5 = nums.some((n)=> n > 5);
console.log(isGreaterThan5)
let isGreaterThan6 = nums.some((n) => n > 6);
console.log(isGreaterThan6)

let allGreaterThan0 = nums.every((x) => x > 0);
console.log(allGreaterThan0);
