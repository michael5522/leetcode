// const Button = ({buttonText, reqType, setReqType}) => {
//   return (
//     <button
//       className={buttonText === reqType ?  "selected" : null}
//       type="button"
//       onClick={ () => setReqType(buttonText)}
//     >
//       {buttonText}
//     </button>
//   )
// }

// export default Button;

// const Button = ({reqType, setReqType, text}) => {
//   return (
//     <button
//       onClick={() => setReqType(text)}
//       style={(text === reqType) ? { color: "red" } :  null}
//       type="button"
//     >
//       {text}
//     </button>
//   )
// }

// export default Button;


const Button = ({text, reqType, setReqType}) => {
  return (
    <button
      onClick={( ()=> setReqType(text))}
    >
      {text}
    </button>
  )
}
export default Button;
