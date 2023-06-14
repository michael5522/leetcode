const Square = ({colorValue}) => {
  return (
    <section
      className="square"
      style={{backgroundColor: colorValue}}
    >
      <p>{colorValue ? colorValue : "empty value"}</p>
    </section>
  )
}

Square.defaultProps = {
  colorValue: "Empty Color VALUE"
}
export default Square
