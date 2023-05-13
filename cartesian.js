function cartesian(arr1,arr2){
console.log(aa,bb)
const result = [];
for(let i = 0; i < arr1.length; i++){
  for(let x = 0; x < arr2.length; x++){
    result.push([arr1[i], arr2[x]]);
  }
}
return result;
}

const aa = [3,1]
const bb = [-2,5,7]
console.log(cartesian(aa,bb))
