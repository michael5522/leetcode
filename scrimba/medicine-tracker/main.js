
const dateEl = document.querySelector("#date");
const currentDate = new Date().toDateString();
dateEl.textContent = currentDate;

const amEL = document.querySelector("#AMcheck");
const pmEL = document.querySelector("#PMcheck");
const imgEl = document.querySelector("#imgTag");
const resetEl = document.querySelector("#reset");

const messageEl = document.querySelector("#message")
console.log(messageEl)

let statusOne = false;
let statusTwo = false;

amEL.addEventListener("click", function(){
  console.log('u clicked this')
  statusOne = !statusOne;
  console.log(statusOne)
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
  if (statusOne && statusTwo) {
    messageEl.textContent = "Good job!, you took both AM/PM medicine!";
    imgEl.src = "./assets/cat3.png";
  }else {
    messageEl.textContent = "Don't forget your AM medicine!"
    imgEl.src = "./assets/cat2.png"
  }
})

function uncheckAll() {
  document.querySelectorAll('input[type="checkbox"]')
    .forEach(el => el.checked = false);
}

resetEl.addEventListener("click", function(){
  statusOne = false;
  statusTwo = false;
  console.log(statusOne, statusTwo)
  imgEl.src = "./assets/cat.png"
  uncheckAll();
})
