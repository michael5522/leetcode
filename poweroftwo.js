function poweroftwo(n){
  if(n < 1){
    return false;
  }
  while(n > 1){
    console.log(n)
    if(n % 2 !== 0){
      console.log('not 0')
      return false
    }
    n = n/2;
  }
  return true;
}

console.log(poweroftwo(1))
console.log(poweroftwo(2))
console.log(poweroftwo(5))

console.log(poweroftwo(8))
console.log(poweroftwo(12))
console.log(poweroftwo(16))
