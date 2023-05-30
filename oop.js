//encapulation
let account = {
  name: 'jane',
  balance: 15,
  deposit(amount){
    this.balance += amount;
  },
  withdraw(amount){
    this.balance -= amount;
  },
  getBalance(){
    return this.balance
  }
}


account.deposit(500);
account.getBalance();
console.log(account.getBalance())


//abstraction
function square(num){
  return num * num
}
console.log(square(5));

//inheritance
let person = {
  name: 'mike',
  greet: function (){
    return 'my name is ' +this.name
  }
}

// console.log(person.greet())

let gg = Object.create(person)
console.log(gg);
gg.name = 'bob';
console.log(gg);
console.log(gg.greet());
