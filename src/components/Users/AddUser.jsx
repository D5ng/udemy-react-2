import classes from "./AddUser.module.css"
import Card from "../UI/Card"
import Button from "../UI/Button"
import { useState } from "react"
import ErrorModal from "../UI/ErrorModal"

function AddUsers({ onAddUser }) {
  const [enteredUsername, setEnteredUsername] = useState("")
  const [enteredAge, setEnteredAge] = useState("")
  const usernameChangeHandler = (event) => setEnteredUsername(event.target.value)
  const ageChangeHandler = (event) => setEnteredAge(event.target.value)

  const addUserHandler = (event) => {
    event.preventDefault()

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) return
    if (+enteredAge < 1) return

    onAddUser(enteredUsername, enteredAge)

    setEnteredUsername("")
    setEnteredAge("")
  }

  return (
    <>
      <ErrorModal title="An error occured!" message="Someting went wrong!" />
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
