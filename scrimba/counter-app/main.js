let count = 0;

function increment(){
  console.log('function was clicked')
  count = count + 1;
  ola.innerHTML = count;
}

let ola = document.querySelector("#count-el")
