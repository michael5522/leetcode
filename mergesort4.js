console.log('ola')

function mergeSort(xxx){
  if(xxx.length < 2){
    return xxx;
  }

  const length = xxx.length;
  const mid = Math.floor(length/2);
  let leftArr = xxx.slice(0,mid);
  let rightArr = xxx.slice(mid);
  console.log(leftArr, rightArr);
  return merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge(leftSide, rightSide){
  let temp = [];
  while(leftSide.length && rightSide.length){
    if(leftSide[0]< rightSide[0]){
      temp.push(leftSide.shift())
    }else{
      temp.push(rightSide.shift())
    }
  }

  return [...temp, ...leftSide, ...rightSide]
}

const abc = [5,8,-10,2,58,-1]
console.log(mergeSort(abc))
