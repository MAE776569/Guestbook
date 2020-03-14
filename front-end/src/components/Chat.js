import React, { Component } from "react"
import NavBar from "./NavBar"
import SearchUsers from "./SearchUsers"
import UsersList from "./UsersList"
import Messages from "./Messages"
import { connectStore } from "../store"
import { withRouter, Redirect } from "react-router-dom"
import { getUsers } from "../utils/API"

/* The main page consists of two section:
messages to view and CRUD messages
users to search and select users to their messages */
class Chat extends Component {
  state = {
    users: []
  }

  componentDidMount(){
    getUsers()
      .then((res) => {
        if (!res.error)
          this.setState({ users: res.users })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    const { loggedUser } = this.props
    if (!loggedUser) return <Redirect to="/login" />

    let { users } = this.state
    users = users.filter((user) => user.id !== loggedUser.id)
    
    return (
      <>
        <NavBar />
        <div className="container pt-1 chat">
          <div className="row px-3">
            <div className="col-12 col-md-6 col-lg-8 order-1 ordre-md-0 messages-section">
              <Messages />
            </div>
            <div className="col-12 col-md-6 col-lg-4 order-0 order-md-1 users-section">
              <SearchUsers />
              <UsersList users={users} />
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default withRouter(connectStore(Chat))
