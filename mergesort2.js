function mergeSort(arr){
  if(arr.length <2){
    return arr
  }
  console.log('arr.length--', arr.length, arr)
  const mid = Math.floor(arr.length /2);
  console.log('start00', 'mid', mid)
  const leftArr = arr.slice(0,mid);
  const rightArr = arr.slice(mid);
  console.log('left--',leftArr, 'right--',rightArr)
  return merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge(leftArr, rightArr){
  const sortedArr = [];
  console.log('inside MERGE NOW BRO')
  console.log(leftArr, rightArr)
  while(leftArr.length && rightArr.length){
    if(leftArr[0] <= rightArr[0]){
      sortedArr.push(leftArr.shift())
      console.log('1', sortedArr)
    }else{
      sortedArr.push(rightArr.shift())
      console.log('2', sortedArr)
    }
    console.log('sortedArray', sortedArr, leftArr, rightArr)
  }
  console.log('here triggering bro')
  console.log(sortedArr.concat(leftArr.slice()).concat(rightArr.slice()), 'ola')
  return sortedArr.concat(leftArr.slice()).concat(rightArr.slice());
}


// const gg = [-6, 20, 8, -2, 4]
// console.log(mergeSort(gg))


// const gg = [-8,-1,1,3,5]
// console.log(mergeSort(gg))

const gg = [9, 5, 2, 0, -5]
console.log(mergeSort(gg))
//  const abc = [5,-3,7,2]
//  console.log(mergeSort(abc));

//while left array.length is POSTIVE, and while array.length right is POSITIVE.
//if one of the array is empty we exit the loop.
//goes straight to the concat or spread operator after.

//do one with asc order
//do one with desc order
