import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <header>
        <Link to='/'><h3>React Blog App</h3></Link>
        <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/create' >Create</NavLink>
        </nav>
    </header>
  )
}

export default NavBar
