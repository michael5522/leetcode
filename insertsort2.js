function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i]
    let j = i - 1;
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = numberToInsert
  }
}

const arr = [10,-3,2]
insertSort(arr);
console.log(arr)
