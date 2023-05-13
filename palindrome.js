function palindrome(gg){
  const abc = gg.split("")

  let pp = true;
  for(let i =0; i < abc.length; i++){
    console.log('sdfsaf')
    console.log('000---',abc[i], abc[(abc.length-1)-i])
    if(abc[i] !== abc[(abc.length-1)-i]){
    pp = false;
    }
  }
  return pp

}

console.log(palindrome('mdooodm'));

function pp2(str){
  let lower = str.toLowerCase();
  console.log(lower)
  let left = 0;
  let right = lower.length-1;
  while(left < right){
    console.log(left, right);
    if(lower[left] !== lower[right]){
      return false;
    }

    left++;
    right--;
  }
  return true;
}

// console.log(pp2('poxon'))

function xd1(abc){
  let reverse = abc.split("").reverse().join("")
  console.log(reverse)
  return reverse.toLowerCase() === abc.toLowerCase();
}

// console.log(xd1('poxop'))
