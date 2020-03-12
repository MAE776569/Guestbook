import React from "react"

function NavBar() {
  return (
    <nav className="navbar navbar-light bg-light">
      <a
        className="navbar-brand"
        href="/">
        Guestbook
      </a>
      <div>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a href="#" className="nav-link">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
