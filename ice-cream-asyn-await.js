const myPromise = new Promise((resolve, reject) => {
  let food = true;
  if (food) {
    setTimeout(()=>{
      resolve('ola fatty');
    },3000)
  } else {
    reject('ola skinny boy');
  }
});

myPromise.then((xxx) => console.log(xxx))
  .catch((xxx) => console.log(xxx));

// let stocks = {
//   fruits: ["strawberry", "grapes", "banana", "apple"],
//   liquid: ["water", "ice"],
//   holder : ["cone", "cup", "stick"],
//   topping: ["chocolate", "peanuts"]
// };

// let is_shop_open = true;
// console.log(is_shop_open);
// function time (ms){
//   return new Promise(resolve, reject) => {
//     if(is_shop_open){
//       resolve('promise is met,' ms)
//     }
//     reject('its closed')
//   }
// }.then((xxx)=>{
//   console.log(xxx)
// }).catch(xxx) => {
//   console.log(xxx)
// }
