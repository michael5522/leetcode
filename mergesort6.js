function mergeSort(n){

  if(n.length < 2 ){
    return n;
  }
  const mid = Math.floor(n.length / 2)
  const left = n.slice(0, mid)
  const right = n.slice(mid)
  console.log(left,right)

  return merge(mergeSort(left), mergeSort(right))
}

function merge(lefty,righty){
  let tempArray = [];
  while(lefty.length && righty.length){
    if(lefty[0] <= righty[0]){
      tempArray.push(lefty.shift());
    }else{
    tempArray.push(righty.shift());
  }
}
  return [...tempArray, ...lefty, ...righty]
}

const gg = [-6, 20, 8, -2, 4]
// console.log(mergeSort(gg))
console.log(mergeSort(gg))
