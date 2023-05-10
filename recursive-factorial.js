function recursivef(n){
  if(n === 0){
    return 1;
  }

  return n * recursivef(n-1)
}

console.log(recursivef(0))
console.log(recursivef(1))
console.log(recursivef(5))
