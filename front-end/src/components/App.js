import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Login from "./Login"
import SignUp from "./SignUp"
import PageNotFound from "./PageNotFound"

function App() {
  return (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/Signup" component={SignUp} />
      <Route component={PageNotFound} />
    </Switch>
  </BrowserRouter>
  )
}

export default App
