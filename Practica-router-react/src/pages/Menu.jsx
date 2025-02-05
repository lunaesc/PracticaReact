import React from 'react'
import './menu.css'
import { Link, Outlet } from 'react-router-dom'

const Menu = () => {
  return (
    <header>
  <nav className='menu'>
        <ul>
            <li>
             <Link to='/'>Inicio</Link>  
            </li>
            <li>
             <Link to='/about'>About</Link>  
            </li>
            <li>
             <Link to='/dashboard'>Dashboard</Link>  
            </li>
        
        </ul>
        <hr/>
        <Outlet/>
    </nav>
    </header>
  )
}

export default Menu