console.log('ola')

const hexInput = document.getElementById("hexInput");
const inputColor = document.getElementById("inputColor");

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

// console.log(isValidHex("#000000"))
// console.log(isValidHex("#0000000"))
// console.log(isValidHex("#ffffff"))
// console.log(isValidHex("fff123"))
