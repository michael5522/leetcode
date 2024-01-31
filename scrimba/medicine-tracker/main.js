const dateEl = document.querySelector("#date");
const currentDate = new Date().toDateString();
dateEl.textContent = currentDate;

const amEL = document.querySelector("#AMcheck");
const pmEL = document.querySelector("#PMcheck");
const imgEl = document.querySelector("#imgTag");
const resetEl = document.querySelector("#reset");
const mealOneEl = document.querySelector("#mealOneCheck");
const mealTwoEl = document.querySelector("#mealTwoCheck");
const messageEl = document.querySelector("#message");

localStorage.setItem("statusOneLocal", false)
localStorage.setItem("statusTwoLocal", false)
localStorage.setItem("statusThreeLocal", false)
localStorage.setItem("statusFourLocal", false)
let statusOne = false;
let statusTwo = false;
let statusThree = false;
let statusFour = false;

amEL.addEventListener("click", function(){
  statusOne = !statusOne;
  localStorage.setItem("statusOneLocal", statusOne)
  statusOne = JSON.parse(localStorage.getItem("statusOneLocal"))
  if (statusOne) {
    messageEl.textContent = "Good job!, don't forget PM medicine";
    imgEl.src = "./assets/cat2.png";
  }else {
    messageEl.textContent = "Please take your morning medicine!!"
    imgEl.src = "./assets/cat.png";
  }
})

pmEL.addEventListener("click", function(){
  statusTwo = !statusTwo;
  localStorage.setItem("statusTwoLocal", statusTwo)
  statusTwo = JSON.parse(localStorage.getItem("statusTwoLocal"))
  if (statusOne && statusTwo) {
    messageEl.textContent = "Good job!, you took both AM/PM medicine!";
    imgEl.src = "./assets/cat3.png";
  }else {
    messageEl.textContent = "Don't forget your AM medicine!"
    imgEl.src = "./assets/cat2.png"
  }
})

mealOneEl.addEventListener("click", function(){
  statusThree = !statusThree;
  localStorage.setItem("statusThreeLocal", statusThree)
  statusThree = JSON.parse(localStorage.getItem("statusThreeLocal"))
  if(statusThree){
    messageEl.textContent = "Good Job! Eating your first meal!"
    imgEl.src = "./assets/cat2.png";
  }
})

mealTwoEl.addEventListener("click", function (){
  statusFour = !statusFour;
  localStorage.setItem("statusFourLocal", statusFour)
  statusFour = JSON.parse(localStorage.getItem("statusFourLocal"))
  if(statusFour){
    messageEl.textContent = "Good Job! You ate meal two!"
    imgEl.src = "./assets/cat3.png";
  }
})
function uncheckAll() {
  document.querySelectorAll('input[type="checkbox"]')
    .forEach(el => el.checked = false);
}

resetEl.addEventListener("click", function(){
  localStorage.clear();
  statusOne = false;
  statusTwo = false;
  statusThree = false;
  statusFour = false;
  imgEl.src = "./assets/cat.png"
  uncheckAll();
  localStorage.setItem("statusOneLocal", false)
  localStorage.setItem("statusTwoLocal", false)
  localStorage.setItem("statusThreeLocal", false)
  localStorage.setItem("statusFourLocal", false)
})
