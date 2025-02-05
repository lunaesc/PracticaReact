import React from 'react'
import {  NavLink } from 'react-router-dom'


const Menu = () => {
  return (
    <nav >
        <ul>
            <li><NavLink  to="/">Inicio</NavLink></li>
            <li><NavLink  to="/informacion/*">Información</NavLink></li>
            <li><NavLink  to="/Registro">Registro</NavLink></li>
            <li><NavLink  to="/login">Login</NavLink></li>
        </ul>
    </nav>
  )
}

export default Menu