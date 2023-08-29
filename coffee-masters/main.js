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
let buffer = '0'
function handleNumber(value){
  console.log('handle num',value)
  if(buffer === '0'){
    buffer = value
  }else{
    buffer+=value;
  }
  console.log(buffer)
}

function handleSymbol(value){
  console.log('handle symbol',value)
}

function displayNum(){
  display.innerText = buffer;
}
