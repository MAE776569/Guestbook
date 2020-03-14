import React from "react"
import UserItem from "./UserItem"

// Users list shows the available users
function UsersList({ users, activeUserID, setActiveUser }) {
  if (users.length === 0) return <div>No available users!</div>

  return (
    <ul className="list-group">
      {users.map((user) => (
        <UserItem
          key={user.id}
          user={user}
          activeUserID={activeUserID}
          setActiveUser={setActiveUser}
        />
      ))}
    </ul>
  )
}

export default UsersList
