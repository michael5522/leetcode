function mergeSort(n){
  if(n.length<2){
    return n
  }
// console.log('array length',n.length)
const gg = Math.floor(n.length/2);
// console.log('index #',gg)
const firstHalf = n.slice(0, gg);
const secondHalf = n.slice(gg);
console.log('array divdeded left',firstHalf, 'array divided right',secondHalf)

return merge(mergeSort(firstHalf), mergeSort(secondHalf))
  function merge(leftArr, rightArr) {
    console.log('leftArr---', leftArr)
    console.log('rightArr', rightArr)
    const array = [];
    while (leftArr.length && rightArr.length) {
      if (leftArr[0] <= rightArr[0]) {
        array.push(leftArr.shift())
      } else {
        array.push(rightArr.shift())
      }
    }
    console.log('ola', array)
    return array.concat(leftArr.slice()).concat(rightArr.slice());

  }
}


const gg= [-6,20,8,-2,4]
console.log(mergeSort(gg))
