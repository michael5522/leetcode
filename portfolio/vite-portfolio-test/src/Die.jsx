/* eslint-disable react/prop-types */

export default function Die(props) {


  return (
    <div className={`die-face ${props.isHeld ? "savedButton" : ""}`} onClick={() => props.holdDice(props.id)}>
     <h2 className="die-num">{props.value}</h2>
    </div>

  )
}
