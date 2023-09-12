let countChars = function(str){
  let count = 0;

  for(let i =0; i < str.length; i++){
    count++;
  }

  return count;
}

// console.log(countChars("dance"));
// O n

const isUnique = (arr) => {
  let result = true;

  for( let i = 0; i < arr.length; i++){
    console.log(`outer loop`, i);
    for(let j = 0; j < arr.length; j++){
      console.log(`inner loop`, j);
      if( i !== j && arr[i] === arr[j]){
        result = false;
      }
    }
  }
  return result;
}

// console.log(isUnique([1,2,3]));
// console.log(isUnique([1, 1, 3]));

const unique2 = (arr) => {
  const breadcrumbs = {};
  let result = true;

  for( let i = 0; i < arr.length; i++){
    console.log(`~~~loop~~~ === ${i}`)
    if(breadcrumbs[arr[i]]){
      result = false;
    }else{
      breadcrumbs[arr[i]] = true;
    }
    console.log('result status',result)
  }
  console.log(breadcrumbs)
  return result;
}
console.log(unique2([1,4,2,1]))
