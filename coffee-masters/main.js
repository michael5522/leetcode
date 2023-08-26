console.log('ola')

let num1 = null;

let gg = document.querySelector(".container");
// console.log(gg)
gg.addEventListener("click", function(e){
  console.log(typeof e.target.innerText)
  num1 = e.target.innerText;
  console.log( num1);

})
