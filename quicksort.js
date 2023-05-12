function quickSort(arr){
  // console.log(arr.length)
  if(arr.length < 2){
    return arr
  }

const last = arr[arr.length-1]
  const array1 = [];
  const array2 = [];
  for(let i = 0; i < arr.length-1; i++){
    console.log(arr[i])
    const numba = arr[i];
    if(numba < last){
      array1.push(numba)
    }else{
      array2.push(numba)
    }
  }
  return [...quickSort(array1), last, ...quickSort(array2)]
}

const gg = [-6,20,8,-2,4]
// console.log(quickSort(gg))
const pp = [-4,0,2,3,5,9,10]
console.log(quickSort(pp))
