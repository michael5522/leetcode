let countChars = function(str){
  let count = 0;

  for(let i =0; i < str.length; i++){
    count++;
  }

  return count;
}

// console.log(countChars("dance"));
// O n

const isUnique = (arr) => {
  let result = true;

  for( let i = 0; i < arr.length; i++){
    console.log(`outer loop`, i);
    for(let j = 0; j < arr.length; j++){
      console.log(`inner loop`, j);
      if( i !== j && arr[i] === arr[j]){
        result = false;
      }
    }
  }
  return result;
}

// console.log(isUnique([1,2,3]));
// console.log(isUnique([1, 1, 3]));

const unique2 = (arr) => {
  const breadcrumbs = {};
  let result = true;

  for( let i = 0; i < arr.length; i++){
    console.log(`~~~loop~~~ === ${i}`)
    if(breadcrumbs[arr[i]]){
      result = false;
    }else{
      breadcrumbs[arr[i]] = true;
    }
    console.log('result status',result)
  }
  console.log(breadcrumbs)
  return result;
}
// console.log(unique2([1,4,2,1]))

const uniqSort = function(arr){
  const breadcrumbs = {};
  const answer = []
  for(let i = 0; i < arr.length; i++){
    if(!breadcrumbs[arr[i]]){
      answer.push(arr[i]);
      breadcrumbs[arr[i]] = true;
    }
    console.log('XXX',answer, breadcrumbs)
  }
  return answer.sort((a,b) => a - b)
}
// console.log(uniqSort([4,2,2,3,2,2,2]));



const times10 = (n) => {
  return n * 10
 };

// console.log('~~~~~~~~~~~~~~TASK 1~~~~~~~~~~~~~~');
// console.log('times10 returns:', times10(9));


const cache = {};
const memoTimes10 = (n) => {
  console.log(n)
  console.log(cache)
 if(n in cache){
  console.log('fetch from cache', n);
  return cache[n]
 }else{
  console.log('calc result');
  let result = times10(n);
  cache[n] = result;
  return result;
 }
}

// console.log('~~~~~~~~~~~~~~TASK 2~~~~~~~~~~~~~~');
// console.log('Task 2 calculated value:', memoTimes10(9));
// console.log('Task 2 cached value:', memoTimes10(9));

function linearSearch(list, item){
console.log(list,item)
let index = -1;
list.forEach((listItem,i) => {
  if(listItem === item){
    index = i;
  }
});
return index;
}
console.log(linearSearch([2,6,7,90,103], 2));
