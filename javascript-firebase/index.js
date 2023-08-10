

import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase, ref, push, onValue, remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

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
  let currentItemID = item[0];
  let currentItemValue = item[1];
  let newEl = document.createElement("li")
  newEl.textContent = currentItemValue;
  newEl.addEventListener("click", function (){
    console.log(currentItemID)
    let exactLocationOfItemInDB = ref(database, `shoppingList/${currentItemID}`)
    remove(exactLocationOfItemInDB)
  })
  shoppingList.append(newEl)
}
cart.addEventListener("click", function (){
  let inputValue = cartInput.value
  push(shoppingListInDB, inputValue)
  clear()
})

onValue(shoppingListInDB, function(snapshot){
  if(snapshot.exists()){
    const gg = Object.entries(snapshot.val());

    clearShoppingListEl()
    for (let i = 0; i < gg.length; i++) {
      let currentItem = gg[i]
      console.log(currentItem)
      let currentItemID = currentItem[0];
      let currentItemValue = currentItem[1];
      appendShoppingList(currentItem)
    }
  }else{
    shoppingList.innerHTML = "No items here...yet"
  }
})

function clearShoppingListEl(){
  shoppingList.innerHTML = ""
}
