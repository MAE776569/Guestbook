import React from "react"

function UserItem({ user }) {
  return (
    <li className="list-group-item list-group-item-action">
      <h6 className="user-item__name">{user.name}</h6>
      <p className="user-item__username">{user.username}</p>
    </li>
  )
}

export default UserItem
