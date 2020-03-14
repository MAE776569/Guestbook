import React, { Component } from "react"
import { Link } from "react-router-dom"
import { connectStore } from "../store"
import { withRouter } from "react-router-dom"
import { logout } from "../utils/API"

class NavBar extends Component {
  shouldComponentUpdate(nextProps){
    return nextProps.loggedUser !== null
  }

  handleLogout = (e) => {
    e.preventDefault()
    logout().then((res) => {
        if (!res.error) {
          this.props.handleLogoutUser()
          this.props.history.push("/login")
        }
        // Else show form errors
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    const { loggedUser } = this.props
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Guestbook
          </Link>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <span>Welcome, {loggedUser.name}</span>
                <a
                  href="/logout"
                  className="nav-link d-inline-block ml-3"
                  onClick={this.handleLogout}>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
export default withRouter(connectStore(NavBar))
