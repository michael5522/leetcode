function majority(xxx){
  let gg = 0;
  let omg = null;
  for(let i = 0; i < xxx.length; i++){
    let current = xxx[i];
    const pp = xxx.filter(ola => ola == current).length
    if(pp > gg){
      gg = pp;
      omg = current;
    }

  }
  return omg;
}

console.log(majority([3,2,3]));

  console.log(majority([2,2,1,1,1,2,2]))
