console.log('ola')
const students = [
  { name: "John", city: "New York" },
  { name: "Peter", city: "Paris" },
  { name: "Kate", city: "Sidney" }
];

//for of
for (const person of students) {
  console.log(`${person.name} lives in ${person.city}`)
}

//spread operator
let contacts = ["Mary", "Joel", "Danny"];
let personalFriends = ["david", ...contacts];
contacts.push('fred')
console.log(personalFriends);
console.log(contacts);


//obj spread operator
let person ={
  name: "mike",
  age: 25,
  city: 'olimiba'
}
let employee = {
    ...person,
    salary: 50000,
    position: "software man"
}
console.log(employee)

const shoppingList = ["eggs", "milk", "butter"];
const shoppingBasket = [...shoppingList, "oragne", "pineapple", "pizza"]
console.log(shoppingBasket)


const fried = (food = "something")=>{
    return `Im goinna buy ${food} from the store`
}

console.log(fried("chicken"));
