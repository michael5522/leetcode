
import Die from './Die.jsx'
import React from 'react';
import {nanoid} from "nanoid";
export default function App() {
  /**
   * Challenge: Create a function `holdDice` that takes
   * `id` as a parameter. For now, just have the function
   * console.log(id).
   *
   * Then, figure out how to pass that function down to each
   * instance of the Die component so when each one is clicked,
   * it logs its own unique ID property. (Hint: there's more
   * than one way to make that work, so just choose whichever
   * you want)
   *
   */



  const [dice, setDice] = React.useState(allNewDice())
  function allNewDice(){
    const array = [];
    for(let i = 0; i < 10; i ++){
      array.push({value:Math.floor(Math.random()*6) +1, isHeld:false, id: nanoid()})
    }
    return array;
  }
  const diceElements = dice.map(die=><Die value={die.value} id={die.id} key={die.id} isHeld={die.isHeld} holdDice={holdDice}/>)
  function reroll(){
    setDice(allNewDice())
  }
  console.log(diceElements)

  function holdDice(id){
    console.log(id)
  }
  return (
    <main>
      <div className="dice-container">
      {diceElements}
      </div>
      <button className="button-info" onClick={reroll}>Roll</button>
    </main>
  )
}
