// function revesefibonacci(n){
//   const fib = [ 0,1]
//   for(let i = 2; i < n+1; i++){
//     fib[i] = fib[i-1] + fib[i-2];
//   }
//   console.log(fib)
//   return fib[n]
// }


function recursiveFibonacci(n){
  if(n < 2){
    return n
  }
  return recursiveFibonacci(n-1) + recursiveFibonacci(n-2);
}
// console.log(revesefibonacci(6))
console.log(recursiveFibonacci(0))
console.log(recursiveFibonacci(1))
console.log(recursiveFibonacci(2))
console.log(recursiveFibonacci(3))
