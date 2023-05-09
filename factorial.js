function factorial(n){
  let sum = n;
  for(let i =n-1; i > 0; i--){
    console.log(i)
    sum = sum * i
  }
   return sum;
}

console.log(factorial(4));
