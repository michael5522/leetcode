// import {useState, useEffect} from 'react';
// import Form from './Form';
// import List from './List';

// function App() {
//   const API_URL = 'https://jsonplaceholder.typicode.com/';
//   const [reqType, setReqType] = useState('users');
//   const [items, setItems] = useState([]);

//   useEffect( ()=> {
//     const fetchItems = async () => {
//       try{
//         const response = await fetch(`${API_URL}${reqType}`);
//         if (!response.ok) throw Error('did not receive expected data');
//         const data = await response.json();
//         // console.log(data);
//         setItems(data);
//       } catch(err){
//         console.log(err);
//       }
//     }
//       fetchItems();
//   }, [reqType]);


//   return (
//     <div className="App">
//       <Form reqType={reqType} setReqType={setReqType} />
//       <List items={items} />
//     </div>
//   );
// }

// export default App;

// import {useState, useEffect} from 'react';
// import Form from './Form';
// import List from './List'
// function App(){

//   const URL = "https://jsonplaceholder.typicode.com/"
//   const [reqType, setReqType] = useState('users');
//   const [items, setItems] = useState([]);
//   useEffect(() => {
//     fetch(`${URL}${reqType}`)
//       .then(response => {
//         return response.json()
//       })
//       .then(data => {
//         console.log(data);
//         setItems(data);
//       })
//   },[reqType])

//   return (
//     <div className="App">
//       <Form
//         reqType={reqType}
//         setReqType={setReqType}
//       />
//       <List items={items} />
//     </div>
//   )
// }
// export default App;

import React, { useState, useEffect} from 'react';
import Form from './Form';
import List from './List'


const App = () => {

  const [reqType, setReqType] = useState('users');
  const [items, setItems] = useState([]);

  const URL = "https://jsonplaceholder.typicode.com/"

  useEffect(() => {
    fetch(`${URL}${reqType}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
      setItems(data)});
  },[reqType]);

  return (
    <div>
      <Form
        reqType={reqType}
        setReqType={setReqType}
      />
      <List poo={items}/>
    </div>

  )
}

export default App;
