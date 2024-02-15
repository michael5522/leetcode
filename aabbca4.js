function test(string){
  console.log(string)
  const obj1 = {};
  for(let prop of string){
    if(obj1[prop]){
      obj1[prop]++
    }else{
      obj1[prop] = 1
    };
  }

  let gg = [];
  for(let prop in obj1){
    gg.push([prop, obj1[prop]])
  }
  console.log(gg)

  gg.sort(function(a,b){
    return b[1] - a[1]
  })
  console.log(gg)

  let ans = "";

  while(gg.length >=2){
    ans = ans + gg[0][0] + gg[1][0]
    gg[0][1] -= 1;
    gg[1][1] -= 1;


    if(gg[0][1] === 0){
      gg.splice(0,2)
    }else{
      if(gg[1][1] === 0){
        gg.splice(1,1)
      }
    }

    gg.sort(function(a,b){
      return b[1] - a[1]
    })
  }

  if(gg.length === 1){
    if(gg[0][1] > 1){
      ans = 'no work'
    }else{
      ans = ans + gg[0][0]
    }
  }

  return ans;
}

let op = "caaab"

console.log(test(op))
