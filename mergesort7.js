function mergeSort(xd){
  if(xd.length < 2){
    return xd;
  }
  let mid = Math.floor(xd.length / 2);
  // console.log(mid)

  let left = xd.slice(0, mid)
  // console.log('left',left);
  let right = xd.slice(mid)
  // console.log('right',right)
  return merge(mergeSort(left), mergeSort(right))
}

function merge(leftArr, rightArr) {
  console.log(leftArr, rightArr)
  const sortedArr = [];
  while(leftArr.length && rightArr.length){
    if(leftArr[0] < rightArr[0]){
      sortedArr.push(leftArr.shift())
    }else {
      sortedArr.push(rightArr.shift())
    }
  }
  return sortedArr.concat(leftArr.slice()).concat(rightArr.slice());
}

const gg = [4,13,59,32,16]
const ff = [1]
console.log(mergeSort(gg))
