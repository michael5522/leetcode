function square(n){
  for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
      console.log(i,j)
    }
  }
}

function cube(n){
  for(let i =0; i < n; i++){
    for(let j = 0; j < n; j++){
      for(let k = 0; k < n; k++){
        console.log(i,j,k)
      }
    }
  }
}

// cube(4);


function logFunc(n){
  if(n === 0) return "done";
  n = Math.floor(n/2);
  console.log('ola', n)
  return logFunc(n);
}

// logFunc(8)

function logn(n){
  console.log('ola', n)
  while (n > 1){

    n = Math.floor(n/2)
    console.log('ola', n)
  }

}

logn(8)
