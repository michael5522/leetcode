console.log('ola')
let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

let firstCard = 10;
let secondCard = 10;
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

function startGame(){
  renderGame();
}

function renderGame() {
  cardsEl.textContent = `Cards: `
  for(let i =0; i <cards.length; i++){
    cardsEl.textContent += `${cards[i]} `
  }

  sumEl.textContent = `Sum: ${sum}`;
  if (sum <= 20) {
    message = "u want new card?"
  } else if (sum === 21) {
    message = "u win"
    hasBlackJack = true;
  } else {
    message = "u lose"
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard(){
  let newCardo = 5;
  cards.push(newCardo)
  console.log(cards)
  sum += newCardo;
  renderGame();
}
