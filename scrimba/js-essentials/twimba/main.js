import { tweetsData } from './data.js';
console.log('ola')
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
console.log(uuidv4());

document.addEventListener('click', function(e){
   if(e.target.dataset.like){
    handleLikeClick(e.target.dataset.like)
   }else if(e.target.dataset.retweet){
    handleRetweetClick(e.target.dataset.retweet)
   }else if(e.target.dataset.reply){
    handleReplyClick(e.target.dataset.reply)
   }else if(e.target.id === "tweet-btn"){
    handleTweetBtnClick()
   }
})

function handleTweetBtnClick() {
  const tweetInput = document.getElementById('tweet-input')
  if(tweetInput.value){
    const obj = {
      handle: `@Scrimba`,
      profilePic: `images/scrimbalogo.png`,
      likes: 0,
      retweets: 0,
      tweetText: tweetInput.value,
      replies: [],
      isLiked: false,
      isRetweeted: false,
      uuid: uuidv4()
    }
    tweetsData.unshift(obj)
    tweetInput.value = '';
    render();
  }
}

function handleReplyClick(tweetId){
  let gg = document.querySelector(`#replies-${tweetId}`)
  // if(gg.classList.contains("hidden")){
  //   gg.classList.remove("hidden");
  // }else{
  //   gg.classList.add("hidden");
  // }
  gg.classList.toggle("hidden")
}

function handleLikeClick(tweetId){
let targetTweetObj = null;
for(let i =0; i < tweetsData.length; i++){
  if(tweetsData[i].uuid === tweetId){
    targetTweetObj = tweetsData[i]
  }
}
if(targetTweetObj.isLiked === false){
  targetTweetObj.likes++;
} else{
  targetTweetObj.likes--;
}
targetTweetObj.isLiked = !targetTweetObj.isLiked;
render();
}

function handleRetweetClick(tweetId){
  console.log('retweet clicked', tweetId)
  const targetTweetObj = tweetsData.filter(function(tweet){
   return tweet.uuid === tweetId
  })[0]

  if(targetTweetObj.isRetweeted){
    targetTweetObj.retweets--
  }else{
    targetTweetObj.retweets++
  }

  targetTweetObj.isRetweeted = !targetTweetObj.isRetweeted;
  render();
}

function getFeedHtml(){
  let feedHtml = "";
  tweetsData.forEach(function(tweet){

    let likeIconClass = '';
    if(tweet.isLiked){
      likeIconClass = 'liked'
    }

    let retweetIconClass = '';
    if(tweet.isRetweeted){
      retweetIconClass = 'retweeted'
    }

    let repliesHtml = '';
    if(tweet.replies.length > 0){

      for(const element of tweet.replies){

        repliesHtml +=
        `
        <div class="tweet-reply">
          <div class="tweet-inner">
            <img src="${element.profilePic}" class="profile-pic">
              <div>
                <p class="handle">${element.handle}</p>
                <p class="tweet-text">${element.tweetText}</p>
              </div>
          </div>
        </div>
        `
      }
    }

    feedHtml += `
    <div class="tweet">
    <div class="tweet-inner">
        <img src="${tweet.profilePic}" class="profile-pic">
        <div>
            <p class="handle">${tweet.handle}</p>
            <p class="tweet-text">${tweet.tweetText}</p>
            <div class="tweet-details">
                <span class="tweet-detail">
                    <i class="fa-regular fa-comment-dots"
                    data-reply="${tweet.uuid}"></i>
                    ${tweet.replies.length}
                </span>
                <span class="tweet-detail">
                    <i class="fa-solid fa-heart ${likeIconClass}"
                    data-like="${tweet.uuid}"></i>
                    ${tweet.likes}
                </span>
                <span class="tweet-detail">
                    <i class="fa-solid fa-retweet ${retweetIconClass}"
                    data-retweet="${tweet.uuid}"></i>
                    ${tweet.retweets}
                </span>
            </div>
        </div>
    </div>
    <div id="replies-${tweet.uuid}">
        ${repliesHtml}
    </div>
</div>
`
  })

  return feedHtml
}

function render(){
  document.getElementById('feed').innerHTML = getFeedHtml()
}

render();
