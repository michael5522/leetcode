function mergeSort(xxx){
  if(xxx.length<2){
    return xxx
  }

  const length = xxx.length;
  const mid = Math.floor(length/2);
  console.log(mid)
  let rightArr = xxx.slice(0,mid);
  console.log('RA',rightArr);
  let leftArr = xxx.slice(mid);
  console.log('LA', leftArr);

  return merge(mergeSort(rightArr), mergeSort(leftArr))
}

function merge(rA, lA){
  let temp = [];
  while(rA.length && lA.length){
    if(rA[0]< lA[0]){
      temp.push(rA.shift())
    }else{
      temp.push(lA.shift())
    }
  }

  return [...temp, ...rA, ...lA]
}

// const gg = [-6, 20, 8, -2, 4]
// console.log(mergeSort(gg))

const pp = [9,5,2,0,-5]
console.log(mergeSort(pp))
