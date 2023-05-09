function prime (n){
  if(n < 2 ){
    console.log('triggering')
    return false;
  }

  for(let i = 2; i < n; i++){
    console.log('here',n, i)
    if(n % i === 0){
      console.log('ola')
      return false;
    }
  }
  return true;
}


console.log(prime(1))
console.log(prime(5))
console.log(prime(4))
console.log(prime(10))
