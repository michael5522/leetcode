function insertSort(arr){
  for(let i = 1; i < arr.length; i++){
    console.log('i', arr[i])
    let numberToInsert = arr[i]
    let j = i - 1;
    console.log('j', j)
    while(j >= 0 && arr[j] > numberToInsert){
      arr[j+1] = arr[j];
      j = j-1;
      console.log('LEFT > right',arr)
    }
    console.log('dfdfaf', j)
    arr[j+1] = numberToInsert
    console.log('RIGHT > left',arr)
  }
  console.log('----')
  console.log('final arr',arr)

}

const arr = [-6,20,8,-2,4]
insertSort(arr);
console.log(arr)
