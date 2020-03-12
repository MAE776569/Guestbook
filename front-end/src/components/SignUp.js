import React, { Component } from "react"
import Intro from "./Intro"

class SignUp extends Component {
  render() {
    return (
      <div className="container-fluid mt-5 p-2">
        <div className="row m-auto">
          <Intro />
          <div className="col-12 col-md-8 col-lg-5 m-auto">
            <form>
              <div className="form-row mb-3">
                <label htmlFor="name" className="col-form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Enter your name"
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
                />
              </div>
              <div className="form-row">
                <input
                  type="submit"
                  value="Sign Up"
                  className="btn d-inline-block btn-outline-primary"
                />
                <a
                  href="#login"
                  className="d-inline-block ml-auto align-self-center">
                  Already a member? Login
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default SignUp
