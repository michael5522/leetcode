let fname = document.getElementById("fname")
let hours = document.getElementById("hours")
let button = document.getElementById("button")
let here = document.getElementById("here")
let count = null
let button2 = document.getElementById("button2")
let name = null
function increment() {
  count += 1
  countEl.textContent = count
}

function save() {
  let countStr = count + " - "
  saveEl.textContent += countStr
}


button.addEventListener("click", function () {
  console.log(fname.value, hours.value)
  count = hours.value
  console.log(count)
  name = fname.value
  here.innerHTML = `<h2>${fname.value}, ${hours.value} hrs remaining</h2>`
  hours.value = ""
  fname.value = ""
})

button2.addEventListener("click", function () {
  count -= 1
  here.innerHTML = `<h2>${name}, now has ${count} hrs remaining</h2>`
})

console.log('ola')
