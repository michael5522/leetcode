function mergeSort(array) {
  if(array.length < 2){
    return array;
  }
  let mid = Math.floor(array.length / 2)
  const left = array.slice(0,mid);
  const right = array.slice(mid)

  return merge(mergeSort(left), mergeSort(right))
}

function merge(lA, rA){
  let temp = [];
  while(lA.length && rA.length){
    if(lA[0] <= rA[0]){
      temp.push(lA.shift())
    }else{
      temp.push(rA.shift())
    }
  }
  return [...temp, ...lA, ...rA]
}

const gg = [-6, 20, 8, -2, 4]
const aa = [4]
console.log(mergeSort(gg))
// console.log(mergeSort(aa))

// console.log(mergeSort(aa))
