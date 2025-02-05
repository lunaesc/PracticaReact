import React, { useState } from 'react'
import { IconContext } from 'react-icons'
import { CgMenuRight } from 'react-icons/cg'
import { FaTimes } from 'react-icons/fa'
import {  Nav, NavbarContainer, NavLogo, NavIcon,  MobileIcon,   NavMenu, NavLink, NavItem } from './NavbarStyles'
import { data } from '../../Data/NavbarData'
import { useLocation, useNavigate } from 'react-router-dom'
import { FaViadeo } from "react-icons/fa";

const Navbar = () => {
    const [show, setShow] = useState(false);

    let history = useLocation();
    let location = useNavigate();

    const handleClick = () => {
        setShow(!show);

        
    };


    const scrollTo = (id) =>{
        const element = document.getElementById(id);

      element.scrollIntoView({
        behavior: 'smooth',
      });
    };



    const closeMobileMenu = (to, id) => {
        if ( id && location.pathname==='/'){
            scroll(id)
        }
        history.push(to);
        setShow(false);
    }
  return (
    <div>
         <IconContext.Provider value={{ color: "#fff", size: "24px" }}>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'> 
                <FaViadeo />
                    <NavIcon />
                    Delta
                </NavLogo>
                <MobileIcon onClick={handleClick}>{show ? <FaTimes/> : <CgMenuRight/>}</MobileIcon>
                <NavMenu show={show}>
                    {data.map((el, index) =>(
                        <NavItem key={index}>
                            <NavLink onClick={() => closeMobileMenu(el.to, el.id)}>{el.text}</NavLink>
                        </NavItem>
                    ))}
                </NavMenu>
            </NavbarContainer>
          

        </Nav>
        </IconContext.Provider>
      
    </div>
  )
}

export default Navbar