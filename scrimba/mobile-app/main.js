import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase,ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSetting = {
  databaseURL: "https://playground2-4b815-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSetting)
const database = getDatabase(app)
const shoppingListInDB = ref(database, "shoppingList")
const addBtnEl = document.querySelector("#add-button")
const inputEl = document.querySelector("#input-field")
const shoppingListEl = document.querySelector("#shopping-list")

addBtnEl.addEventListener("click", function(){
  let inputValue = inputEl.value;

  push(shoppingListInDB, inputValue)
  clearInputFieldEl();
})

onValue(shoppingListInDB, function(snapshot){
  if(snapshot.exists()){
    let itemsArray = Object.entries(snapshot.val())

    clearShoppingListEl()

    for (let i = 0; i < itemsArray.length; i++) {
      let currentItem = itemsArray[i]
      let currentItemID = currentItem[0]
      let currentItemValue = currentItem[1]
      appendItemToShoppingListEl(currentItem)
    }
  } else{
    shoppingListEl.innerHTML = `No items here....yet`
  }

})

function clearShoppingListEl() {
  shoppingListEl.innerHTML = ""
}

function clearInputFieldEl(){
  inputEl.value = "";
}

function appendItemToShoppingListEl(xxx){
  let itemID = xxx[0];
  let itemValue = xxx[1]

  let newEl = document.createElement("li")
  newEl.textContent = itemValue

  newEl.addEventListener("click", function (){
    let exactLocationOfItemInDB = ref(database, `shoppingList/${itemID}`)
    remove(exactLocationOfItemInDB)
  })
  shoppingListEl.append(newEl)
}
