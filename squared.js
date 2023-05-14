function squared(arr1, arr2){
  console.log(arr1, arr2)
  if(arr1.length !== arr2.length){
    return false
  }
  for(var i = 0; i < arr1.length; i++){
    let foundIndex = arr2.indexOf(arr1[i] ** 2);
    console.log('found index', foundIndex);

    if(foundIndex === -1){
      return false;
    }

    arr2.splice(foundIndex,1);
    console.log(arr2)
  }
  // console.log(arr1, arr2)
  return true;
}

// const gg = [1,2,3];
// const gg2 = [9,1,7];

// console.log(squared(gg,gg2))
const aa = [2,5,3];
const bb = [4,9,9];
console.log(squared(aa,bb));
