const Input = ({ colorValue, setColorValue }) => {
  return (
    <form className="input" onSubmit={(e)=> e.preventDefault()}>
      <label htmlFor="search">Add Color Name:</label>
      <input
        id="search"
        autoFocus
        type="text"
        placeholder="add color name"
        required
        value={colorValue}
        onChange={(e => setColorValue(e.target.value))}
      />
    </form>
  )
}


export default Input;
