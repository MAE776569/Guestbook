import React, { Component } from "react"
import Intro from "./Intro"
import { Link } from "react-router-dom"
import { connectStore } from "../store"
import { login } from "../utils/API"
import { withRouter, Redirect } from "react-router-dom"

// Controlled component for login page
class Login extends Component {
  state = {
    username: "",
    password: ""
  }

  // Handle input change by passing the name of the input to change the state
  handleInputChange = (e, inputName) => {
    this.setState({ [inputName]: e.target.value })
  }

  // Handle login form submit
  handleSubmit = (e) => {
    e.preventDefault()
    login(this.state)
      .then((res) => {
        if (!res.error) {
          this.props.handleLoginUser(res)
          this.props.history.push("/")
        }
        // Else show form errors
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    if (this.props.loggedUser) return <Redirect to="/" />

    const { username, password } = this.state

    return (
      <div className="container mt-5 p-2">
        <div className="row m-auto">
          <Intro />
          <div className="col-12 col-md-8 col-lg-5 m-auto">
            <form onSubmit={this.handleSubmit}>
              <div className="form-row mb-3">
                <label htmlFor="username" className="col-form-label">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="form-control"
                  placeholder="Mohamed55"
                  value={username}
                  onChange={(e) => this.handleInputChange(e, "username")}
                />
              </div>
              <div className="form-row mb-3">
                <label htmlFor="password" className="col-form-label">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => this.handleInputChange(e, "password")}
                />
              </div>
              <div className="form-row">
                <input
                  type="submit"
                  value="Login"
                  className="btn d-inline-block btn-outline-primary"
                />
                <Link
                  to="/signup"
                  className="d-inline-block ml-auto align-self-center">
                  Not a member? Sign up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(connectStore(Login))
