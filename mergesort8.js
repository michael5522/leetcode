function mergeSort(xd){
  if(xd.length < 2){
    return xd;
  }
  const mid = Math.floor(xd.length / 2)
  console.log('mid--',mid)
  const left = xd.slice(0,mid)
  const right = xd.slice(mid)
  console.log('left',left,'right',right)

  return merge(mergeSort(left), mergeSort(right))
}

function merge(leftArr,rightArr){
  console.log('lmafo',leftArr, rightArr)
  let array = [];
  while (leftArr.length && rightArr.length){
    if(leftArr[0] < rightArr[0]){
      array.push(leftArr.shift())
    }else{
      array.push(rightArr.shift())
    }
  }
  return [...array, ...leftArr, ...rightArr]
}

const gg = [-6, 20, 8, -2, 4]
console.log(mergeSort(gg))

// const aa = [ 4]
// console.log(mergeSort(aa))
