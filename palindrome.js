function palindrome(gg){
  const abc = gg.split("")

  let pp = true;
  if(abc.length % 2 !== 0){
    console.log('already fail')
    pp = false;
  }
  for(let i =0; i < abc.length; i++){
    console.log('sdfsaf')
    console.log('000---',abc[i], abc[(abc.length-1)-i])
    if(abc[i] !== abc[(abc.length-1)-i]){
    pp = false;
    }
  }
  return pp

}

console.log(palindrome('mdodm'));
