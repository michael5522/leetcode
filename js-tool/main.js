const hexInput = document.getElementById("hexInput")
const inputColor = document.getElementById("inputColor")
const isValidHex = (hex) => {
  console.log('hex here', hex)
  if(!hex){
    return false;
  }

  const strippedHex = hex.replace("#", '');
  console.log('gg',strippedHex.length)
  return strippedHex.length === 3 || strippedHex.length === 6;
}

hexInput.addEventListener("keyup", ()=>{
  const pp = hexInput.value;
  console.log('ola friend', pp)

  if(!isValidHex(pp)){
    return;
  }
  const strippedHex = pp.replace("#", '');
  inputColor.style.backgroundColor = `#${strippedHex}`;
})

//Create a function to convert Hex to RGB
//this should work with 3 or 6 character hex values
//Hint - use parseInt("", 16) to convert a hex value to a decimal value
//should return an object with 3 properties - r,g, and b
//Test your function with a few different use cases

const convertHexToRGB = (hex) => {
  if(!isValidHex(hex)){
    return null;
  }
  let strippedHex = hex.replace('#', '');
  if(strippedHex.length === 3){
    strippedHex = strippedHex[0] + strippedHex[0] + strippedHex[1] + strippedHex[1] + strippedHex[2] + strippedHex[2];
  }
 const r = parseInt(strippedHex.substring(0,2), 16);
 const g = parseInt(strippedHex.substring(2,4), 16);
 const b = parseInt(strippedHex.substring(4,6), 16);

 return {r,g,b};
}

console.log(convertHexToRGB("fff"))
