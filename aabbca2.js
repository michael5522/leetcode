let gg = "cbbbbaaa";
let op = "aaabc"

function test(string){
  const obj1 = {}
  for(const element of string){
    console.log('element', element)
    if(obj1[element]){
      obj1[element] ++
    }else{
      obj1[element] = 1;
    }
  }
  //count char in obj
  console.log('one',obj1)


  let array = [];
  for(let property in obj1){
    array.push([property, obj1[property]])
  }
  //put char count into array so sort can be used
  console.log('two',array)


  let sorting = array.sort((a,b)=> b[1]- a[1])
  //sorted the array by biggest number to smallest
  console.log('three', sorting)

  let ans = "";

  while(sorting.length >=2){
    ans = ans + sorting[0][0] + sorting[1][0];
    sorting[0][1] -= 1;
    sorting[1][1] -= 1;
    if(sorting[0][1] === 0){
      sorting.splice(0,2)
    }else {
      if(sorting[1][1] === 0){
        sorting.splice(1,1)
      }
    }

    sorting.sort((a,b) => b[1] - a[1])
    //final step checking two chars
    console.log('four', sorting)
    // console.log('answer', ans)
  }
  if(sorting.length === 1){
    if(sorting[0][1] > 1){
      ans = 'no answer'
    }else{
      ans = ans + sorting[0][0]
    }
  }

  return ans
}


let pp = "cbbbbaaa"
console.log(test(op));
