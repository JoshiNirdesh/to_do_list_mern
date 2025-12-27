import React from 'react'
import { Link } from 'react-router-dom'
import "../style/navbar.css"

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='nav-logo'>To Do List</div>
        <ul className='nav-links'>
            <li><Link to ="/">List</Link></li>
            <li><Link to ="/add">Add List</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar
