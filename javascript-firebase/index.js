/*
Challenge:
Make it so that when you click the 'Add to cart' button, whatever is written in the input field should be console logged.
*/



const cart = document.querySelector("#add-button")
console.log(cart)
const cartInput = document.querySelector("#input-field")
console.log(cartInput.value)

cart.addEventListener("click", function (){
  console.log(cartInput.value)
})
