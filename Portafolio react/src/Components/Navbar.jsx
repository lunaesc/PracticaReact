import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <>
    <NavHeader>
        <NavLink to='/'>
        Portafolio
        </NavLink>
    </NavHeader>
    </>
  )
}

export default Navbar

 const NavHeader = styled.header`
 background-color: aqua;
 `;

const NavLink = styled(Link)``;


//  const Nav = styled.header``;
// const  = styled.header``;