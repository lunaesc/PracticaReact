import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FaTree } from 'react-icons/fa'
import { navItems } from './Navtems'
import Button from './Button'
import Dropdown from './Dropdown'

const Navbar = () => {
  const [dropdown, setDropdown] = useState(true);

  return (
    <div>
        <nav className='navbar'> 
            <Link to="/" className='navbar-logo'>
              NATURE 
              <FaTree/>
            </Link>
            <ul className='nav-items'>
              {navItems.map(item => {
                if (item.title === "Services"){
                  return(
                    <li key={item.id} className={item.cName}>
                      <Link to={item.path}>{item.title}</Link>
                      {dropdown && <Dropdown/>}
                    </li>
                    );
                }

                return(
                <li key={item.id} className={item.cName}>
                  <Link to={item.path}>{item.title}</Link>
                </li>
                );
              })}
            </ul>
            <Button/>
        </nav>
    </div>
  )
}

export default Navbar