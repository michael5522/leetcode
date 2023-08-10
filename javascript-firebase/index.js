

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
  appendShoppingList(inputValue);
  clear()
})

onValue(shoppingListInDB, function(snapshot){
  console.log(snapshot.val())
  const gg = Object.values(snapshot.val());
  console.log(gg)

})
