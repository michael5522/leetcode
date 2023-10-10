
import Die from './Die.jsx'
export default function App() {
  /**
 * Challenge:
 *
 * Write a function (allNewDice) that returns an array
 * of 10 random numbers between 1-6 inclusive.
 *
 * Log the array of numbers to the console for now
 */

  function AllNewDice(){
    const array = [];
    for(let i = 1; i < 10; i ++){
      array.push(Math.floor(Math.random()*6) +1)
    }
    return array;
  }
  console.log(AllNewDice())

  return (
    <main>
      <div className="dice-container">
        <Die value="1" />
        <Die value="2" />
        <Die value="3" />
        <Die value="4" />
        <Die value="5" />
        <Die value="6" />
        <Die value="7" />
        <Die value="8" />
        <Die value="9" />
        <Die value="10" />
      </div>
    </main>
  )
}
