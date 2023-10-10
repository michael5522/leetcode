
import Die from './Die.jsx'
import React from 'react';
export default function App() {


  const [dice, setDice] = React.useState(allNewDice())
  function allNewDice(){
    const array = [];
    for(let i = 0; i < 10; i ++){
      array.push(Math.floor(Math.random()*6) +1)
    }
    return array;
  }
  const diceElements = dice.map(die=><Die value={die} key={Math.random()}/>)
  function reroll(){
    setDice(allNewDice())
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
