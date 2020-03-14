import React, { Component } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Chat from "./Chat"
import Login from "./Login"
import SignUp from "./SignUp"
import PageNotFound from "./PageNotFound"
import { getStore } from "../store"

class App extends Component {
  state = {
    loggedUser: null
  }

  handleLoginUser = (loggedUser) => {
    this.setState({ loggedUser })
  }

  handleLogoutUser = () => {
    this.setState({ loggedUser: null })
  }

  render() {
    const storeValue = {
      ...this.state,
      handleLoginUser: this.handleLoginUser,
      handleLogoutUser: this.handleLogoutUser
    }

    const Store = getStore()

    return (
      <Store.Provider value={storeValue}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Chat} />
            <Route path="/login" component={Login} />
            <Route path="/Signup" component={SignUp} />
            <Route component={PageNotFound} />
          </Switch>
        </BrowserRouter>
      </Store.Provider>
    )
  }
}

export default App
