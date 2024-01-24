let home1 = document.querySelector("#homescore")
let homebtn1 = document.querySelector("#home-1")
let homebtn2 = document.querySelector("#home-2")
let homebtn3 = document.querySelector("#home-3")

console.log(home1, homebtn1, homebtn2, homebtn3)

let homescore = 0;

function ola1 (){
  homescore++;
  home1.innerText = homescore;
  console.log(homescore)
}

function ola2() {
  homescore = homescore + 2;
  home1.innerText = homescore;
  console.log(homescore)
}

function ola3() {
  homescore = homescore + 3;
  home1.innerText = homescore;
  console.log(homescore)
}
