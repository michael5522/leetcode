const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];


const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

// const numba = numbers.reduce((total, currentVal) => total+currentVal)
// console.log(numba)

// const product = numbers.reduce((total, currentVal) =>  total*currentVal)
// console.log(product);
// const initialValue = 0;
// const balance = account.reduce((total, transaction, initialValue)=>
// {
//   console.log('1111', total)
//   console.log('222', transaction)
//   if(transaction.type === 'deposit'){
//     return total + transaction.amount;
//   }else {
//     return total - transaction.amount;
//   }
// }, initialValue);

// const balance = account.reduce((total, transaction) =>
// {
//   console.log('000',total);
//   console.log('111', transaction)
//   if(transaction.type === 'deposit'){
//     return total + transaction.amount;
//   }else {
//     return total - transaction.amount;
//   }
// },0);

// console.log(balance);
// const composite = traits.reduce((target, source) => Object.assign(target, source));
// console.log('composite', composite);

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];
// const net = (balance, transaction) => {
//   console.log(balance, transaction)
//   if (transaction.type === 'deposit') {
//     return balance + transaction.amount
//   }

//   return balance - transaction.amount
// }

// const balance = account.reduce(net, 0)


// console.log(balance)


const gg = account.reduce((aaa,bbb) => {
  if (bbb.type === 'deposit') {
    return aaa + bbb.amount
  }

  return aaa- bbb.amount
},0)

console.log(gg);

const net = (balance, transaction) => {
  if(transaction.type === 'deposit'){
    return balance + transaction.amount
  }
  return balance - transaction.amount
}

const balance = account.reduce(net,0);
console.log(balance)
