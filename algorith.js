let countChars = function(str){
  let count = 0;

  for(let i =0; i < str.length; i++){
    count++;
  }

  return count;
}

// console.log(countChars("dance"));
// O n

const isUnique = (arr) => {
  let result = true;

  for( let i = 0; i < arr.length; i++){
    console.log(`outer loop`, i);
    for(let j = 0; j < arr.length; j++){
      console.log(`inner loop`, j);
      if( i !== j && arr[i] === arr[j]){
        result = false;
      }
    }
  }
  return result;
}

// console.log(isUnique([1,2,3]));
// console.log(isUnique([1, 1, 3]));

const unique2 = (arr) => {
  const breadcrumbs = {};
  let result = true;

  for( let i = 0; i < arr.length; i++){
    console.log(`~~~loop~~~ === ${i}`)
    if(breadcrumbs[arr[i]]){
      result = false;
    }else{
      breadcrumbs[arr[i]] = true;
    }
    console.log('result status',result)
  }
  console.log(breadcrumbs)
  return result;
}
// console.log(unique2([1,4,2,1]))

const uniqSort = function(arr){
  const breadcrumbs = {};
  const answer = []
  for(let i = 0; i < arr.length; i++){
    if(!breadcrumbs[arr[i]]){
      answer.push(arr[i]);
      breadcrumbs[arr[i]] = true;
    }
    console.log('XXX',answer, breadcrumbs)
  }
  return answer.sort((a,b) => a - b)
}
// console.log(uniqSort([4,2,2,3,2,2,2]));



const times10 = (n) => {
  return n * 10
 };

// console.log('~~~~~~~~~~~~~~TASK 1~~~~~~~~~~~~~~');
// console.log('times10 returns:', times10(9));


const cache = {};
const memoTimes10 = (n) => {
  console.log(n)
  console.log(cache)
 if(n in cache){
  console.log('fetch from cache', n);
  return cache[n]
 }else{
  console.log('calc result');
  let result = times10(n);
  cache[n] = result;
  return result;
 }
}

// console.log('~~~~~~~~~~~~~~TASK 2~~~~~~~~~~~~~~');
// console.log('Task 2 calculated value:', memoTimes10(9));
// console.log('Task 2 cached value:', memoTimes10(9));

function linearSearch(list, item){
console.log(list,item)
let index = -1;
list.forEach((listItem,i) => {
  if(listItem === item){
    index = i;
  }
});
return index;
}
// console.log(linearSearch([2,6,7,90,103], 2));


const favoriteBooks = [];
function addFavoriteBook(xxx){
  if(!xxx.includes('Great')){
    favoriteBooks.push(xxx);
}
}

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");
// console.log(favoriteBooks)

// function printFavoriteBooks(){
//   console.log( `favorite books: ${favoriteBooks.length}`)
//   for(let book of favoriteBooks){
//     console.log(String(book));
//   }
// }
// printFavoriteBooks();

class Bookshelf {
  constructor() {
    this.favoriteBooks = [];
  }

  addFavoriteBook(bookName) {
    if (!bookName.includes("Great")) {
      this.favoriteBooks.push(bookName);
    }
  }

    printFavoriteBooks() {
      console.log(`Favorite Books: ${String(this.favoriteBooks.length)}`);
      for (let bookName of this.favoriteBooks) {
        console.log(bookName);
      }
    }
}






    function loadBooks(bookshelf) {
      fakeAjax(BOOK_API, function onBooks(bookNames) {
        console.log(bookNames)
        for (let bookName of bookNames) {
          // console.log('lolol',bookName)
          bookshelf.addFavoriteBook(bookName);
        }
        bookshelf.printFavoriteBooks();
      });
    }

var BOOK_API = "https://some.url/api";
var myBooks = new Bookshelf();
loadBooks(myBooks)

// ***********************

// NOTE: don't modify this function at all
function fakeAjax(url, cb) {
  setTimeout(function fakeLoadingDelay() {
    cb([
      "A Song of Ice and Fire",
      "The Great Gatsby",
      "Crime & Punishment",
      "Great Expectations",
      "You Don't Know JS"
    ]);
  }, 500);
}
