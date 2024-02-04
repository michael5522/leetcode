import { catsData } from './data.js'

const emotionRadios = document.getElementById('emotion-radios')
const getImagesButton = document.getElementById('get-image-btn')
const gifsOnlyBoolean = document.getElementById('gifs-only-option')
const memeModalInner = document.getElementById('meme-modal-inner')
const memeModal = document.getElementById('meme-modal')
const closeBtn = document.getElementById('meme-modal-close-btn')



emotionRadios.addEventListener("change", highlightCheckedOption)

closeBtn.addEventListener("click", () => {
  memeModal.style.display = 'none'
})

getImagesButton.addEventListener('click', renderCat)

function highlightCheckedOption(e) {
  const arrayRadio = document.getElementsByClassName("radio")
  for (let gg of arrayRadio) {
    gg.classList.remove("highlight")
  }
  document.getElementById(e.target.id).parentElement.classList.add("highlight")
}

function renderCat() {
  const catObject = getSingleCatObject();
  console.log(catObject)
  memeModalInner.innerHTML =
    `
    <img
        class="cat-img"
        src="./images/${catObject.image}"
        alt="${catObject.alt}"
    >
    `
  memeModal.style.display = 'flex';
}

function getSingleCatObject() {
  const catsArray = getMatchingCatsArray()
  if (catsArray.length === 1) {
    return catsArray[0]
  } else {
    const randomNumber = Math.floor(Math.random() * catsArray.length)
    return catsArray[randomNumber];
  }
}

function getMatchingCatsArray() {
  if (document.querySelector('input[type="radio"]:checked')) {
    let gg = document.querySelector('input[type="radio"]:checked').value
    let isGif = gifsOnlyBoolean.checked

    const matchingCatsArray = catsData.filter(function (xxx) {
      if (isGif) {
        return xxx.emotionTags.includes(gg) && xxx.isGif
      } else {
        return xxx.emotionTags.includes(gg)
      }

    })
    return matchingCatsArray;
  }

}

function getEmotionsArray(cats) {
  const emotionsArray = []
  for (let cat of cats) {
    for (let emotion of cat.emotionTags) {
      if(!emotionsArray.includes(emotion)){
        emotionsArray.push(emotion)
      }
    }
  }
  return emotionsArray
}

function renderEmotionsRadios(cats) {
  let radioItems = ``
  const emotions = getEmotionsArray(cats)
  for (let emotion of emotions) {
    radioItems +=
    `
    <div class="radio">
    <label for="${emotion}">${emotion}</label>
    <input
      type="radio"
      id="${emotion}"
      value="${emotion}"
      name="emotions"
    >

    </div>
    `
  }
  emotionRadios.innerHTML = radioItems
}

renderEmotionsRadios(catsData)
