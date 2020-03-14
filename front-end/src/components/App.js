import React, { Component } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Chat from "./Chat"
import Login from "./Login"
import SignUp from "./SignUp"
import PageNotFound from "./PageNotFound"
import { getStore } from "../store"
import { checkAuthedUser } from "../utils/authentication"
import { getLoggedUser } from "../utils/API"

class App extends Component {
  state = {
    loading: true,
    loggedUser: null
  }

  componentDidMount() {
    if (!this.state.loggedUser && checkAuthedUser()) {
      getLoggedUser()
        .then((res) => {
          if (!res.error) {
            this.setState({ loggedUser: res, loading: false })
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  handleLoginUser = (loggedUser) => {
    this.setState({ loggedUser })
  }

  handleLogoutUser = () => {
    this.setState({ loggedUser: null })
  }

  render() {
    if (this.state.loading) return <h1>Loading...</h1>

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
