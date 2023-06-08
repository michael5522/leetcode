function lengthOfLastWord(abc){
  const gg = abc.split(" ")
  console.log(gg);
  const result = gg.filter(xxx => xxx.length > 1);
  console.log(result);
  console.log(result[result.length - 1].length);
  return result[result.length-1].length;
  // const gg = abc.split(" ");
  // console.log(gg);
  // const ggg = gg.join('');
  // console.log(ggg);
  // const gggg = ggg.split("");
  // console.log(gggg);
}
  // console.log(abc.length)
  // for(let i = abc.length-1; i >0; i--){
  //   console.log(abc[i])
  //   if(abc[i] == ""){
  //     console.log(' you are empty string!!')
  //   }
  // }
  // // let omg = null;
  // // while(abc.endsWith(' ')){
  // //   console.log('triggering', omg);
  // //   omg = abc.slice(0, abc.length - 1);
  // // }
  // //   console.log(omg);
  //   // const pp = omg.split(" ");
  //   // console.log('greato', pp[pp.length - 1].length);
  //   // return pp[pp.length-1].length;
  // }
    // console.log('this trigger')
    // const gg = abc.split(" ");
    // console.log(gg.length - 1);
    // console.log(gg[gg.length - 1]);
    // console.log(gg[gg.length - 1].length);
    // return gg[gg.length - 1].length;


lengthOfLastWord('   fly me   to   the moon  ');
