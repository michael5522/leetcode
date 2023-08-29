console.log('ola')
let answer = null;

let gg = document.querySelector(".container");
let display = document.querySelector(".blank")
// console.log(gg)
gg.addEventListener("click", function(e){

  buttonClick(e.target.innerText)

})

function buttonClick(value){
  if(isNaN(parseInt(value))){
    handleSymbol(value);
  }else{
    handleNumber(value)
  }
  displayNum()
}
let buffer = '0';
function handleNumber(value){
  console.log('handle num',value)
  if(buffer === '0'){
    buffer = value
  }else{
    buffer+=value;
  }
  console.log(buffer)
}
let runningTotal = 0;
let previousOperator;

function handleSymbol(value){
  switch (value) {
    case "C":
      buffer = "0";
      runningTotal = 0;
      break;
    case "=":
      console.log('equals')
      break;
    case "←":
      if(buffer.length === 1){
        buffer = '0';
      }else{
        buffer = buffer.substring(0, buffer.length - 1)
      }
      console.log('back arrow')
      break;
    case "+":
    case "-":
    case "×":
    case "÷":
      console.log('math symbol')
      break;
  }
}

function displayNum(){
  display.innerText = buffer;
}
