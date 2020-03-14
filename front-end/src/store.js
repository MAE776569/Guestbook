import React, { createContext } from "react"

const Store = createContext({})

export const getStore = () => Store

export function connectStore(Component) {
  return (props) => (
    <Store.Consumer>
      {(value) => <Component {...props} {...value} />}
    </Store.Consumer>
  )
}
