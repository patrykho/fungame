import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {

  return (
    <header >

      <h1>Funny Game</h1>
      <nav>
        <ul className="nav-wrapper">

          <li className="nav-item">
            <NavLink
              exact
              to="/login"


            >
              Login
            </NavLink>
          </li>
        </ul>


      </nav>
    </header>)

}


export default Header