
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(
//   <div>
//     <Navbar/>
//     <MainContent/>
//   </div>
// )

function App() {
  return (
    <div>
      <Joke punchline="I got my daughter a fridge for her birthday." setup="I can't wait to see her face light up when she opens it." />
      <Joke punchline="I got my daughter a fridge for her birthday." setup="I can't wait to see her face light up when she opens it." />
      <Joke punchline="I got my daughter a fridge for her birthday." setup="I can't wait to see her face light up when she opens it." />
      <Joke punchline="I got my daughter a fridge for her birthday." setup="I can't wait to see her face light up when she opens it." />
      <Joke punchline="I got my daughter a fridge for her birthday." setup="I can't wait to see her face light up when she opens it." />
    </div>
  )
}

function Joke({ setup, punchline }) {
  return (
    <div>
      <h1>{setup}</h1>
      <h2>{punchline}</h2>
    </div>
  )
}

function Page() {
  return (

      <App/>

  )
}

ReactDOM.render(<Page />, document.getElementById("root"))
