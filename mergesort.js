function mergeSort(n){
  if(n.length<2){
    console.log('triggered here',n)
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
    console.log('merging area----')
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
    console.log('ola', array.concat(leftArr.slice()).concat(rightArr.slice()))
    console.log('----loop over')
    return array.concat(leftArr.slice()).concat(rightArr.slice());

  }
}


const gg= [20,6,8,4,-2]
console.log(mergeSort(gg))
