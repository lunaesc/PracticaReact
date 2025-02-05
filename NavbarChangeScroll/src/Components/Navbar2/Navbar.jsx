import React, { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const ChangeBg = () => {
    if (window.scrollY >= 100){
      setNavbar(true);

    }else {
      setNavbar(false);
    };

  }
  window.addEventListener('scroll', ChangeBg);
  return (
    <nav className= {navbar ? 'navbar scroll' : 'navbar' }>
        <a href="#" className='navbar-brand'><span>E</span>asy Conding</a>
        <div className="">
            <ul className='navbar-nav'>
                <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
                <li className="nav-item"><a href="#" className="nav-link">About</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Services</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Detailes</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar