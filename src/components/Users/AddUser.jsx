import classes from "./AddUser.module.css"
import Card from "../UI/Card"
import Button from "../UI/Button"
import { useState } from "react"
import ErrorModal from "../UI/ErrorModal"

function AddUsers({ onAddUser }) {
  const [enteredUsername, setEnteredUsername] = useState("")
  const [enteredAge, setEnteredAge] = useState("")
  const [error, setError] = useState()
  const usernameChangeHandler = (event) => setEnteredUsername(event.target.value)
  const ageChangeHandler = (event) => setEnteredAge(event.target.value)

  const addUserHandler = (event) => {
    event.preventDefault()

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please Enter a valid name and age",
      })
      return
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please Enter a valid age (> 0)",
      })
      return
    }

    onAddUser(enteredUsername, enteredAge)

    setEnteredUsername("")
    setEnteredAge("")
  }

  const errorHandler = () => setError(null)

  return (
    <>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName</label>
          <input type="text" id="username" onChange={usernameChangeHandler} value={enteredUsername} />
          <label htmlFor="age">Age</label>
          <input type="text" id="age" onChange={ageChangeHandler} value={enteredAge} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  )
}

export default AddUsers
