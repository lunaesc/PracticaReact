
import { IconContext } from 'react-icons/lib';
import {Nav, NavbarContainer, NavIcon, NavLogo, MobileIcon } from './Navbar.elements';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';


const Navbar = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
  return (
    <>
    <IconContext.Provider value={{color:'#fff'}}>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>
                    <NavIcon/>
                    ULTRA
                    
                </NavLogo>
                <MobileIcon onClick={handleClick}
                >
                   {click ? <FaTimes/> : <FaBars/>}
                </MobileIcon>
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
    </>
  );
};

export default Navbar