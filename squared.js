function squared(arr1, arr2){
  console.log(arr1, arr2)
  if(arr1.length !== arr2.length){
    return false
  }
  let hana = true;
  arr1.map(x => {
    let gg = x *x;
    console.log(gg);
    if(arr2.includes(gg) === false){
      console.log('its inside the second array');
      hana = false;
    }
  })
  return hana;
}

const gg = [1,2,3];
const gg2 = [9,1,7];

// console.log(squared(gg,gg2))
const aa = [2,2,3];
const bb = [4,9,9];
console.log(squared(aa,bb));
