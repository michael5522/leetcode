import React from "react"

export default function App() {

  const [gg, setGG] = React.useState({
    email: "",
    password: "",
    password2: "",
    okayToEmail: false
  })
  // console.log(gg)
  function handleChange(event) {
    const { name, checked, type, value } = event.target;
    setGG(prevState => {
      return (
        {
          ...prevState,
          [name]: type === "checkbox" ? checked : value
        }
      )
    })
  }
  function handleSubmit(event) {
    event.preventDefault()
    console.log(gg)
    if (gg.password === gg.password2) {
      console.log("u successful log in")
    } else {
      console.log("you failed log in")
    }
    if (okayToEmail) {
      console.log("u have succeded in getting the newsletter")
    }
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email address"
          className="form--input"
          name="email"
          onChange={handleChange}
          value={gg.email}
        />
        <input
          type="password"
          placeholder="Password"
          className="form--input"
          name="password"
          onChange={handleChange}
          value={gg.password}
        />
        <input
          type="password"
          placeholder="Confirm password"
          className="form--input"
          name="password2"
          onChange={handleChange}
          value={gg.password2}
        />

        <div className="form--marketing">
          <input
            id="okayToEmail"
            type="checkbox"
            name="okayToEmail"
            onChange={handleChange}
            value={gg.okayToEmail}
            checked={gg.okayToEmail}

          />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button
          className="form--submit"
        >
          Sign up
        </button>
      </form>
    </div>
  )
}
