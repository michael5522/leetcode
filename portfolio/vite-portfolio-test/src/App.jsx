
import Die from './Die.jsx'
import React from 'react';
import {nanoid} from "nanoid";
export default function App() {


  const [dice, setDice] = React.useState(allNewDice())
  const [tenzies, setTenzies] = React.useState(false)


  React.useEffect(()=>{
      const isHeldArray = []
      dice.map(die => die.isHeld ? isHeldArray.push(die.value): "");
      const allEqual = isHeldArray.every(a => a === isHeldArray[0]);
      if(isHeldArray.length == 10 && allEqual){
        setTenzies(true)
        console.log('you win')
      }
  },[dice])
  function allNewDice(){
    const array = [];
    for(let i = 0; i < 10; i ++){
      array.push({value:Math.floor(Math.random()*6) +1, isHeld:false, id: nanoid()})
    }
    return array;
  }
  const diceElements = dice.map(die=><Die value={die.value}  key={die.id} isHeld={die.isHeld} holdDice={holdDice} id={die.id}/>)

  function reroll(){
    const gg = dice.map(die => die.isHeld === true ? die : { value: Math.floor(Math.random() * 6) + 1, isHeld: false, id: nanoid() })
    setDice(gg);
    if(tenzies){
      setDice(allNewDice())
      setTenzies(false)
    }
  }


  function holdDice(id){
    const gg = dice.map(die => die.id === id ? {...die, isHeld: !die.isHeld} : die)
    setDice(gg)
  }



  return (
    <main>
      <div className="dice-container">
      {diceElements}
      </div>
      <button className="button-info" onClick={reroll}>{tenzies ? "new game" : "roll"}</button>
    </main>
  )
}
