let gg = "aaaabbbc"

function test(string){
  //step 1
  let obj = {}
  for(let i = 0; i < string.length;i++) {
    if (string[i] in obj) {
      obj[string[i]]++
    } else {
      obj[string[i]] =  1
    }
  }
  //step 2
  let sortable = [];
  for (const property in obj) {
    sortable.push([property, obj[property]]);
  }
  sortable.sort(function (a, b) {
    return b[1] - a[1];
  });
  console.log(sortable)

  //step 3
  let ans = '';

  while(sortable.length >= 2) {
    ans = ans + sortable[0][0] + sortable[1][0];
    sortable[0][1] -= 1;
    sortable[1][1] -= 1;
    if(sortable[0][1] === 0) {
      sortable.splice(0, 2)
    } else {
      if(sortable[1][1] === 0) {
        sortable.splice(1, 1)
      }
    }
    sortable.sort((a, b) => b[1] - a[1]);
    console.log(sortable)
  }

  if(sortable.length === 1) {
    if(sortable[0][1] > 1) {
      ans = 'no answer';
    } else {
      ans = ans + sortable[0][0];
    }
  }

  return ans;
}

console.log(test(gg))
