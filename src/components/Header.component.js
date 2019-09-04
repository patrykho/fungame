import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {

return (
     <header >
    
    <h1>Funny Game</h1>
    <NavLink
              exact
              to="/login"
              
            
            >
              Login
            </NavLink>
    

    </header>)

}


export default Header