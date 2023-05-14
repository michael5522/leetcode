function squared2(arr1, arr2){
  // if(arr1.length !== arr2.length){
  //   return false;
  // }

  // let freqCounter1 = {};
  // let freqCounter2 = {};

  // for(let num of arr1){
  //   // console.log('0000',num);
  //   freqCounter1[num] = freqCounter1[num] +1 || 1;
  //   // console.log('111',freqCounter1)
  // }

  // for(let num of arr2){
  //   // console.log('999', num)
  //   freqCounter2[num] = freqCounter2[num] + 1 || 1;
  //   // console.log('222',freqCounter2)
  // }

  // console.log('000',freqCounter1,'999', freqCounter2)
  // for(xxx in freqCounter1){
  //   console.log(xxx);
  //   console.log('xd', xxx **2)
  //   if(!(xxx ** 2 in freqCounter2)){
  //     console.log('some magic')
  //     return false;
  //   }
  //   console.log('XD', freqCounter2[xxx **2])
  //   if(freqCounter1[xxx] !== freqCounter2[xxx **2]) {
  //     console.log('faaa')
  //     return false;
  //   }
  // }

  // return true;

  if(arr1.length !== arr2.length){
    return false;
  }

  for(let i = 0; i <arr1.length; i++){
    console.log('000',arr1[i]);
    const gg = arr2.indexOf(arr1[i] **2);
    console.log('ola',gg)
    if (gg === -1) {
      return false
    };

    arr2.splice(gg,1);
    console.log('69',arr2);

  }
  return true;
}

console.log(squared2([1,2,3], [9,4,1]));
console.log(squared2([1,2,3], [1,4]));
console.log(squared2([2,2,3], [4,9,9]));
