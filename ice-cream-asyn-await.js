// const myPromise = new Promise((resolve, reject) => {
//   let food = true;
//   if (food) {
//     setTimeout(()=>{
//       resolve('ola fatty');
//     },3000)
//   } else {
//     reject('ola skinny boy');
//   }
// });

// myPromise.then((xxx) => console.log(xxx))
//   .catch((xxx) => console.log(xxx));

let stocks = {
  fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder : ["cone", "cup", "stick"],
  topping: ["chocolate", "peanuts"]
};

let is_shop_open = true;

let order = (time,work) => {
  return new Promise ((resolve,reject) => {
    if(is_shop_open){
      setTimeout(()=>{
        resolve(work())
      }, time);
    } else {
      reject(console.log("out shop is closed"));
    }
  });
};

order(2000, ()=>console.log(`${stocks.fruits[0]} was selected`))
