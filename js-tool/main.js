const hexInput = document.getElementById("hexInput")
const inputColor = document.getElementById("inputColor")
const slider = document.getElementById("slider")
const sliderText = document.getElementById("sliderText")
const alteredColor = document.getElementById("alteredColor")
const isValidHex = (hex) => {
  // console.log('hex here', hex)s
  if(!hex){
    return false;
  }

  const strippedHex = hex.replace("#", '');
  // console.log('gg',strippedHex.length)
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

// console.log(convertHexToRGB("fff"))

const convertRGBtoHex = (r,g,b) => {
  let convertR = r.toString(16);
  let convertG = g.toString(16);
  let convertB = b.toString(16);
  // console.log('before', convertR, convertG, convertB);
  if(convertR.length != 2){
    convertR = `0${convertR}`
  }
  if (convertG.length != 2) {
    convertG = `0${convertG}`
  }
  if (convertB.length != 2) {
    convertB = `0${convertB}`
  }
  // console.log(convertR, convertG, convertB);
  const hex = "#" + convertR + convertG + convertB;
  return hex;
}

// console.log(convertRGBtoHex(0,255,255))

slider.addEventListener("input", ()=>{
  sliderText.textContent = `${slider.value}%`;
  const pp = hexInput.value;

  if (!isValidHex(pp)) {
    return;
  }
  let newColor =alterColor(pp, slider.value)
  console.log(newColor)
  alteredColor.style.backgroundColor = `${newColor}`;
}
)

const alterColor = (hex, percentage) => {
  // console.log(hex, percentage)
  const {r,g,b} = convertHexToRGB(hex)
  const amount = Math.floor((percentage/100) * 255);
  console.log('old',r,g,b)

  const increaseWithin0To255 = (hex, amount) => {
    const newHex = hex + amount;
    if (newHex > 255) return 255;
    if (newHex < 0) return 0;
    return newHex;
  }

  const newR = increaseWithin0To255(r, amount)
  const newG = increaseWithin0To255(g, amount)
  const newB = increaseWithin0To255(b, amount)
  console.log('new',newR, newG, newB)


  return convertRGBtoHex(newR, newG, newB)
}

console.log(alterColor('fff', 10))
