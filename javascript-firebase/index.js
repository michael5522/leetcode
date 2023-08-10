

import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase, ref, push, onValue} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
  databaseURL: "https://shooping-kart-default-rtdb.firebaseio.com/"
}
const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDB = ref(database, "shoppingList")

const cart = document.querySelector("#add-button")
const cartInput = document.querySelector("#input-field")
const shoppingList = document.getElementById("shopping-list")

function clear(){
  cartInput.value = ""
}

function appendShoppingList(item){
  shoppingList.innerHTML += ` <li>${item}</li>`
}
cart.addEventListener("click", function (){
  let inputValue = cartInput.value
  push(shoppingListInDB, inputValue)

  clear()
  // appendShoppingList(inputValue);

})

onValue(shoppingListInDB, function(snapshot){

  const gg = Object.values(snapshot.val());

  clearShoppingListEl()
  for(let i =0; i < gg.length; i++){

    appendShoppingList(gg[i])
  }

})

function clearShoppingListEl(){
  shoppingList.innerHTML = ""
}
