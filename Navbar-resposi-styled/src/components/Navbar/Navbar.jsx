import React from 'react'
import { IconLogo, IconLogoMobile, Menu, Menuitem, MenuitemLink, NavbarContainer, NavbarWrapper } from './Navbar.element'
import { AiFillAliwangwang} from "react-icons/ai";
import { FaAlignLeft, FaTimes } from "react-icons/fa";
import { useState } from 'react';

const Navbar = () => {
    const [click, setClick] = useState(true);

    const ChampeClick = () => {
        setClick(!click)
        console.log(click);
    }
  return (


  <NavbarContainer>
    
    <NavbarWrapper>
         <IconLogoMobile onClick={() => ChampeClick()}>
           {
            click ? <FaTimes/> :  <FaAlignLeft/>
           }
            </IconLogoMobile>
        <IconLogo>
        <AiFillAliwangwang size={'2em'}/>
        Ghost-P(x)    
        </IconLogo> 
           
        <Menu click={click}>
            <Menuitem onClick={() => ChampeClick()}>
                <MenuitemLink>
                    HOME
                </MenuitemLink>
            </Menuitem>
            <Menuitem onClick={() => ChampeClick()}>
                <MenuitemLink>
                    ABOUT US
                </MenuitemLink>
            </Menuitem>
            <Menuitem onClick={() => ChampeClick()}>
                <MenuitemLink>
                    SERVICES
                </MenuitemLink>
            </Menuitem>
            <Menuitem onClick={() => ChampeClick()}>
                <MenuitemLink>
                    COMMUNITY
                </MenuitemLink>
            </Menuitem>
            <Menuitem onClick={() => ChampeClick()}>
                <MenuitemLink>
                    CONTACT
                </MenuitemLink>
            </Menuitem>
        </Menu>
    </NavbarWrapper>
  </NavbarContainer>
  )
}

export default Navbar