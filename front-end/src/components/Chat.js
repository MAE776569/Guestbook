import React from "react"
import NavBar from "./NavBar"
import UsersList from "./UsersList"

function Chat() {
  return (
    <>
      <NavBar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-8">chat</div>
          <div className="col-4">
            <UsersList />
          </div>
        </div>
      </div>
    </>
  )
}

export default Chat
