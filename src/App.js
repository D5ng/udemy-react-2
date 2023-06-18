import React, { useState } from "react"
import AddUsers from "./components/Users/AddUser"
import UserList from "./components/Users/UserList"

function App() {
  const [usersList, setUsersList] = useState([])
  const addUserHandler = (name, age) => setUsersList((prevUser) => [...prevUser, { id: Date.now(), name, age }])

  console.log(usersList)

  return (
    <div>
      <AddUsers onAddUser={addUserHandler} />
      {usersList.length && <UserList users={usersList} />}
    </div>
  )
}

export default App
