function test(string){
  const obj1 = {};
  for(let element of string){
    if(obj1[element]){
      obj1[element]++
    }else{
      obj1[element] = 1
    }
  }
  console.log(obj1)
  let array1 = [];
  for(let prop in obj1){
    array1.push([prop, obj1[prop]])
  }
  console.log(array1)

  let sA = array1.sort( (a,b)=> b[1]- a[1])
  console.log(sA)

  let ans = "";
  while(sA.length >=2){
    ans = ans + sA[0][0] + sA[1][0];
    sA[0][1] -=1;
    sA[1][1] -=1;

    if(sA[0][1] === 0){
      sA.splice(0,2)
    }else {
      if (sA[1][1] === 0) {
        sA.splice(1, 1)
      }
    }

    sA = sA.sort((a,b) => b[1]-a[1])
    console.log('pp',sA, ans)
  }

  if(sA.length === 1){
    if(sA[0][1] < 1){
      ans = 'no answer';
    }else{
      ans = ans + sA[0][0]
    }
  }

  return ans;
}

let gg = 'baaac'


console.log(test(gg))
