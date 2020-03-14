import React, { Component } from "react"
import Intro from "./Intro"
import { Link } from "react-router-dom"
import { connectStore } from "../store"
import { withRouter } from "react-router-dom"
import { signup } from "../utils/API"

// Controlled component for signup page
class SignUp extends Component {
  state = {
    name: "",
    username: "",
    password: "",
    confirmPassword: ""
  }

  // Handle input change by passing the name of the input to change the state
  handleInputChange = (e, inputName) => {
    this.setState({ [inputName]: e.target.value })
  }

  // Handle signup form submit
  handleSubmit = (e) => {
    e.preventDefault()
    signup(this.state)
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
    const { name, username, password, confirmPassword } = this.state

    return (
      <div className="container mt-5 p-2">
        <div className="row m-auto">
          <Intro />
          <div className="col-12 col-md-8 col-lg-5 m-auto">
            <form onSubmit={this.handleSubmit}>
              <div className="form-row mb-3">
                <label htmlFor="name" className="col-form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => this.handleInputChange(e, "name")}
                />
              </div>
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
              <div className="form-row mb-3">
                <label htmlFor="c-password" className="col-form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="c-password"
                  className="form-control"
                  placeholder="Enter the same password as before"
                  value={confirmPassword}
                  onChange={(e) => this.handleInputChange(e, "confirmPassword")}
                />
              </div>
              <div className="form-row">
                <input
                  type="submit"
                  value="Sign Up"
                  className="btn d-inline-block btn-outline-primary"
                />
                <Link
                  to="/login"
                  className="d-inline-block ml-auto align-self-center">
                  Already a member? Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(connectStore(SignUp))
