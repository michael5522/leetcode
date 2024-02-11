//given a string s, rearrange the characters of s, so that any two adjacent characters are not the same.
// return any possible rearrangement of s or return "" if not possible.
// example 1,
// input s = "aaabc",

// example 2,
// input s = "abaca"

console.log('ola')

const abc = "aaabc"
// console.log(abc)
let array = [];
function hello(gg) {
  for(let i =0; i < gg.length; i++){
    array.push(gg[i])
  }
 return array;
}
hello(abc)
// console.log(array)

const counts = {};
for(const char of array){
  counts[char] = counts[char] ? counts[char] + 1 : 1;
}

console.log(counts)

const gg = Object.values(counts)
console.log(gg)
