import React, { createContext } from "react"

const Store = createContext({})

export const getStore = () => Store

export function connectStore(Component) {
  return () => (
    <Store.Consumer>
      {value => <Component {...value} />}
    </Store.Consumer>
  )
}