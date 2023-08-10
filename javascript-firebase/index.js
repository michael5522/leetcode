

import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase, ref, push} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
  databaseURL: "https://shooping-kart-default-rtdb.firebaseio.com/"
}
const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDB = ref(database, "shoppingList")

const cart = document.querySelector("#add-button")
console.log(cart)
const cartInput = document.querySelector("#input-field")
console.log(cartInput.value)
const shoppingList = document.getElementById("shopping-list")
console.log(shoppingList)


function clear(){
  cartInput.value = ""
}

function appendShoppingList(item){
  shoppingList.innerHTML += ` <li>${item}</li>`
}
cart.addEventListener("click", function (){
  let inputValue = cartInput.value
  push(shoppingListInDB, inputValue)
  appendShoppingList(inputValue);
  clear()
})
