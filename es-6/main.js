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

/*
    ** includes() Challenge
        * You want to make a chocolate cake
        * And you have a list of ingredients represented with an array
        * Using the JavaScript includes() function
        * Check if you have the ingredient chocolate in your list of ingredients, and print into the console "We are going to make a chocolate cake" if you have it
        * Else print into the console "We can't make a chocolate cake because we are missing the ingredient chocolate"
*/

const listIngredients = ["flour", "sugar", "eggs", "butter"];
const check = (xxx) => {
  let boo = xxx.includes("chocolate")
  console.log(boo)
  return boo ? `we are goign to make choco cake` : `we cannot make choco cake missing choco`
}
console.log(check(listIngredients))
