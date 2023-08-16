console.log('ola')

const hexInput = document.getElementById("hexInput");
const inputColor = document.getElementById("inputColor");
const sliderText = document.getElementById("sliderText");
const slider = document.getElementById("slider");

const isValidHex = (hex) => {
  if(!hex) return false;
  let strippedHex = hex;
  if(hex.startsWith("#")){
    strippedHex = hex.slice(1);
  }
  return strippedHex.length === 3 || strippedHex.length === 6;
}

hexInput.addEventListener("keyup", ()=> {
  const hex = hexInput.value;
  // console.log(hex)
 if(!isValidHex(hex)) return;
  const strippedHex = hex.replace("#", "")
  inputColor.style.backgroundColor = `#${strippedHex}`;
})

const hexToDecimal = hex => {
  if(!isValidHex(hex)) return null;

  let strippedHex = hex.replace("#", "");
  if(strippedHex.length === 3){
    strippedHex = strippedHex[0] + strippedHex[0]
    + strippedHex[1] + strippedHex[1]
    + strippedHex[2] + strippedHex[2]
  }
  console.log(strippedHex)

  const r = parseInt(strippedHex.substring(0,2), 16);
  const g = parseInt(strippedHex.substring(2, 4), 16);
  const b = parseInt(strippedHex.substring(4, 6), 16);

  return {r,g,b}
}


const convertRGBToHex = (r,g,b) => {
  let fOne = ("0" + r.toString(16)).slice(-2)
  let fTwo = ("0" + g.toString(16)).slice(-2)
  let fThree = ("0" + b.toString(16)).slice(-2)
  const hex = "#" + fOne + fTwo + fThree;
  return hex;

}


slider.addEventListener("input", function(){
  console.log(event.target.value)
  sliderText.textContent = `${event.target.value}%`
})


//Create the alterColor function which accepts hex value and percentage
//convert the hex value to rgb
//increase each r,g,b value by appropriate amount (percentage of 255)
//use the new r,g,b values to convert to a hex value
//return the hex value'

const alteredColor = (hex,percentage) =>{
  const {r,g,b} = hexToDecimal(hex);
  const amount = Math.floor((percentage/100)*255);
  const newR = r + amount;
  const newG = g + amount;
  const newB = b + amount;
  console.log(newR, newG, newB)
  return convertRGBToHex(newR, newG, newB)
}

console.log(alteredColor('fff', 10));
