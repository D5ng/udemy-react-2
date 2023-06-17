import classes from "./AddUsers.module.css"
import Card from "../UI/Card"
import Button from "../UI/Button"

function AddUsers() {
  const addUserHandler = (event) => {
    event.preventDefault()
  }

  return (
    <Card className={classes.input}>
      <form>
        <label htmlFor="username">UserName</label>
        <input type="text" id="username" />
        <label htmlFor="age">Age</label>
        <input type="text" id="age" />
        <Button>Add User</Button>
      </form>
    </Card>
  )
}

export default AddUsers
