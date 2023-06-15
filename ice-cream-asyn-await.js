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

// let order = (time,work) => {
//   return new Promise ((resolve,reject) => {
//     if(is_shop_open){
//       setTimeout(()=>{
//         resolve(work())
//       }, time);
//     } else {
//       reject(console.log("out shop is closed"));
//     }
//   });
// };

// order(2000, ()=>console.log(`${stocks.fruits[0]} was selected`))
//   .then(()=> order(2000, ()=>{console.log(`${stocks.holder}`)}))
//   .then( ()=> order(2000, ()=> console.log('whats up man')))
//   .then( ()=>{
//     return order(2000, ()=>{
//       console.log('my butt ache')
//     })
//   })
//   .catch(()=>{
//     console.log('customer left');
//   })
//   .finally(()=> {
//     console.log('day ended, shop is closed')
//   })

// async function order (){
//   try{
//     await abc;
//   }

//   catch(error){
//     console.log('abc no exist', error);
//   }

//   finally{
//     console.log('runs code whatever')
//   }
// }

// order();

let topping_choice = () => {
  return new Promise((resolve,reject)=>{
    setTimeout(()=> {
      resolve(
        console.log('which topping u want?')
      );
    }, 2000);
  });
 };

 async function kitchen (){
  console.log('a')
   console.log('b')
   console.log('c')
   await topping_choice()
   console.log('d')
   console.log('e')
 }

 kitchen();
 console.log('cleaning dish');
 console.log('washing face');
