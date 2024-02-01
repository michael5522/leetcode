
const modal = document.getElementById('modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const consentFormEl = document.getElementById('consent-form');
const modalTextEl = document.getElementById('modal-text');
const declineBtn = document.querySelector("#decline");
const buttons = document.querySelector("#modal-choice-btns")
setTimeout(function () {
  modal.style.display = 'inline'
}, 1500);

modalCloseBtn.addEventListener('click', function () {
  modal.style.display = 'none'
});

consentFormEl.addEventListener('submit', function(e){
  e.preventDefault();
  const consentFormData = new FormData(document.getElementById('consent-form'));
  const name = consentFormData.get("name");
  modalTextEl.innerHTML = `
  <div class="modal-inner-loading">
    <img src="images/loading.svg" class="loading">
      <p id="uploadText">
        Uploading your data to the dark web...
      </p>
  </div>`
  setTimeout(() => { document.querySelector("#uploadText").innerText = `Making the sale...` }, 1500)
  setTimeout(()=> {
    document.querySelector(".modal-inner").innerHTML = `
    <h2>Thanks you <span class="modal-display-name">${name}</span>, you sucker! </h2>
    <p>We just sold the rights to your eternal soul.</p>
    <div class="idiot-gif">
        <img src="images/bugatti.jpg">
    </div>
    `
    modalCloseBtn.disabled = false;
  },3000)

});

declineBtn.addEventListener("mouseenter", ()=>{
  buttons.classList.toggle("opposite")
})
