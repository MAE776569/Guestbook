import React, { Component } from "react"
import Intro from "./Intro"

class Login extends Component {
  state = {
    username: "",
    password: ""
  }

  handleInputChange = (e, inputName) => {
    this.setState({ [inputName]: e.target.value })
  }

  render() {
    const { username, password } = this.state

    return (
      <div className="container-fluid mt-5 p-2">
        <div className="row m-auto">
          <Intro />
          <div className="col-12 col-md-8 col-lg-5 m-auto">
            <form>
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
                  placeholder="Your Password"
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
                <a
                  href="#sign-up"
                  className="d-inline-block ml-auto align-self-center">
                  Not a member? Sign up
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
