function mergeSort(xxx){
  if(xxx.length < 2){
    return xxx;
  }
  const length = xxx.length;
  const mid = Math.floor(length/2);
  let left = xxx.slice(0, mid);
  let right = xxx.slice(mid);
  console.log(left, right);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(rA, lA){
  let temp = [];
  while(rA.length && lA.length){
    if(rA[0] <= lA[0]){
      temp.push(rA.shift())
    }else{
      temp.push(lA.shift())
    }
  }

  return [...temp, ...rA, ...lA]
}

const gg = [-6, 20, 8, -2, 4]
console.log(mergeSort(gg))
