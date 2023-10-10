
import Die from './Die.jsx'
import React from 'react';
import {nanoid} from "nanoid";
export default function App() {


  const [dice, setDice] = React.useState(allNewDice())
  function allNewDice(){
    const array = [];
    for(let i = 0; i < 10; i ++){
      array.push({value:Math.floor(Math.random()*6) +1, isHeld:false, id: nanoid()})
    }
    return array;
  }
  const diceElements = dice.map(die=><Die value={die.value}  key={die.id} isHeld={die.isHeld} holdDice={holdDice} id={die.id}/>)
  function reroll(){
    setDice(allNewDice())
  }
  console.log(diceElements)

  function holdDice(id){
    const gg = dice.map(die => die.id === id ? {...die, isHeld: !die.isHeld} : die)
    setDice(gg)
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
