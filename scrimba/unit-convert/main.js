console.log('ola')

const inputEl = document.querySelector("#input-el")
console.log(inputEl)
const btnEl = document.querySelector("#btn-el")
console.log(btnEl)
const oneD = document.querySelector("#one")
console.log('1',oneD)
const twoD = document.querySelector("#two")
const threeD = document.querySelector("#three")


/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

btnEl.addEventListener("click", function(){

  let gg = Number(inputEl.value);
  console.log(typeof gg)
  oneD.textContent = `${gg} meters = ${(gg * 3.281).toFixed(3)} feet | ${gg} feet = ${(gg / 3.281).toFixed(3)} meters`
  twoD.textContent = ` ${gg} liters = ${(gg * .264).toFixed(3)} gallons | ${gg} gallons = ${(gg * 3.785).toFixed(3)} liters`
  threeD.textContent = ` ${gg} kilos = ${(gg * 2.204).toFixed(3)} pounds| ${gg} pounds = ${(gg * .453).toFixed(3)} kilos`
})
