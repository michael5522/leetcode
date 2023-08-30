const letters = document.querySelectorAll(".scoreboard-letter")
const loadingDiv = document.querySelector(".info-bar")
const ROUNDS = 6;

async function init(){
let currentRow = 0;
let currentGuess = "";
let isLoading = true;


const res = await fetch("https://words.dev-apis.com/word-of-the-day");
const resObj = await res.json();
const word = resObj.word.toUpperCase();
const wordParts = word.split("");
console.log('word parts',wordParts)
  let done = false;
setLoading(false);
console.log(word)
isLoading = false;

  document.addEventListener("keydown", function ola(event) {

    if(done || isLoading){
      return;
    }
    let action = event.key;
    console.log(action)

    if (action === "Enter") {
      commit();
    } else if (action === "Backspace") {
      backspace();
    } else if (isLetter(action)) {
      addLetter(action.toUpperCase());
    } else {
      //do nothing
    }
  })

  function isLetter(letter) {
    return /^[a-zA-Z]$/.test(letter);
  }

  function addLetter(letter){
    if(currentGuess.length < 5){
      currentGuess += letter;
    }else{
      current = currentGuess.substring(0, currentGuess.length -1) + letter;
    }

    letters[5 * currentRow + currentGuess.length-1].innerText = letter;
  }

  function commit (){
    if(currentGuess.length !== 5){
      return;
    }
    //TODO validate the world

    //TODO do all the marking as "correct" "close" or "wrong"
    const guessParts = currentGuess.split("")
    const map = makeMap(wordParts);
    console.log(map)

    for(let i = 0; i < 5; i++){
      //mark as correct
      if(guessParts[i]=== wordParts[i]){
        letters[currentRow * 5 + i].classList.add("correct")
        map[guessParts[i]]--;
      }

      for(let i = 0; i < 5; i++){
        if(guessParts[i] === wordParts[i]){
          //do nothing we already did it
        }else if(wordParts.includes(guessParts[i]) && map[guessParts[i]]> 0){
          letters[currentRow * 5 + i].classList.add("close");
          map[guessParts[i]]--;
        }else{
          letters[currentRow * 5 + i].classList.add("wrong");
        }
      }
    }
    //TODO did they win or lose
    currentRow++;

    console.log(currentGuess)
    if(currentGuess === word){
      alert('u win');
      done = true;
      return;
    }else if(currentRow === ROUNDS){
      alert(`u lose the word is ${word}`)
      done = true;
    }
    currentGuess = "";
  }

  function backspace(){
    console.log(currentGuess)
    currentGuess = currentGuess.substring(0, currentGuess.length-1);
    console.log(currentGuess)
    letters[5 * currentRow + currentGuess.length].innerText = ""
  }

  function setLoading(isLoading){
    loadingDiv.classList.toggle('hidden', !isLoading);
  }

  function makeMap(array){
    console.log('triggering')
    const obj = {};
    for(let i = 0; i < array.length; i++){
      const letter = array[i]
      if(obj[letter]){
        obj[letter]++;
      }else{
        obj[letter] = 1;
      }
    }
    return obj;
  }


}


init();
