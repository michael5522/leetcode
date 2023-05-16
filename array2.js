let nums = [1,2,3,4, [5,6,[7,8]],9]

let flat = nums.flat(1)

let flat2 = nums.flat(2)
console.log(flat);

console.log(flat2)


let names = ['mike', 'andy', 'candy']
const arro = [];
let count = null;
names.forEach(x => {
  count++;
  arro.push(x)}
  );
console.log(arro, count)
