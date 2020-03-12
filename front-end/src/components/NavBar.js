import React from "react"
import { Link } from "react-router-dom"

function NavBar() {
  return (
    <nav className="navbar navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        Guestbook
      </Link>
      <div>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
