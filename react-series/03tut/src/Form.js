// import Button from './Button';

// const Form = ({reqType, setReqType}) => {
//   return (
//     <form onSubmit={(e) => e.preventDefault()}>
//       <Button
//         buttonText='users'
//         reqType={reqType}
//         setReqType={setReqType}
//       />
//       <Button
//         buttonText='posts'
//         reqType={reqType}
//         setReqType={setReqType}
//       />
//       <Button
//           buttonText='comments'
//           reqType={reqType}
//           setReqType={setReqType}
//       />
//     </form>
//   )
// }

// export default Form;

// import Button from './Button'
// const Form = ({reqType, setReqType}) => {
//   return (
//     <div>
//       <Button
//         reqType={reqType}
//         setReqType={setReqType}
//         text="Users"
//       />
//       <Button
//         reqType={reqType}
//         setReqType={setReqType}
//         text="Posts"
//       />
//       <Button
//         reqType={reqType}
//         setReqType={setReqType}
//         text="Comments"/>
//     </div>
//   )
// }

// export default Form;

import Button from './Button'
const Form = ({reqType, setReqType}) => {
  return (
    <form onSubmit={(e)=> e.preventDefault() }>
      <Button
      reqType={reqType}
      setReqType={setReqType}
      text="users"
      />
      <Button
      reqType={reqType}
      setReqType={setReqType}
        text="posts"
      />
      <Button
      reqType={reqType}
      setReqType={setReqType}
      text="comments"
      />
    </form>
  )
}

export default Form;
