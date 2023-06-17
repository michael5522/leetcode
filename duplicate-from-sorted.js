function ola(xd){
  console.log(xd);
  const array = [];
  for(let i = 0; i < xd.length; i++){

    let value = xd[i];
    console.log('xxx',value);
    if(!array.includes(value)){
      array.push(value)
    }
    console.log('111', array)
  }
  console.log('222',array);
  return array;
}

const abc = [1,1,2];

console.log(ola(abc))

const gg = [1,1,2,3,3,5,5,5,5,5];

console.log(ola(gg));
