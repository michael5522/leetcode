let arr = [];
let start = 0;

let target = 80;

for(let i =1; i <=100; i++){
  arr.push(i)
}
console.log(arr.length)
console.log(arr)
let end = arr.length;

// console.log(arr);
function binarySearch(arr, start, end, target){
  console.log(arr.slice(start,end))
  if(start > end){
    return false;
  }
  let midIndex = Math.floor((start + end)/2);
  if(arr[midIndex] === target){
    return arr[midIndex];
  }

  if(arr[midIndex] > target){
    return binarySearch(arr, start, midIndex -1, target);
  }else{
    return binarySearch(arr, midIndex+1, end, target);
  }
}

binarySearch(arr,start,end,target)
