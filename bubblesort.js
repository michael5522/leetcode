function bubble(arr){
  let swapped;
  do{
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        console.log('ola')
        swapped = true;
        console.log(swapped)
        console.log(arr)
      }
    }
  }while(swapped)
}
const arr = [-6,20,8,-2,4]
console.log(bubble(arr))
console.log(arr)

const gg = [-3,-8, 0, 10, 5]
console.log(bubble(gg))
console.log(gg)
