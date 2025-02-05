import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import Menu from './Menu';

const Navbar = ({toggleDrawer, routes}) => {
  return (
    <SHeader>
        
        <NavContainer>
            <DrawerButoon onClick={toggleDrawer}>
                <FaBars/>
            </DrawerButoon>
            <SNavbarBrand>LOGO</SNavbarBrand>
            <RightNav>
                <NavRoutes>
                    {routes.map((route) => {
                        if (route.subRoutes){
                            return <Menu route={route} key={route.name}/>
                        }
                        return(
                        <NavRoute to={route.link} key={route.name}>{route.name}</NavRoute>
                    );
                    })}
                </NavRoutes>
                <LoginButton to='Login'>Login</LoginButton>
            </RightNav>
        </NavContainer>
    </SHeader>
  );
};

export default Navbar;

const DrawerButoon = styled.button`
     all: unset;
    font-size: 3rem;
    display: grid;
`;

const SHeader = styled.header`
    background-color:#6f07f6;
         position: fixed;
    left: 0;
    top: 0;
        width: 100%;

`;

const NavContainer = styled.nav`
position: sticky;
     height: 70px;
     max-width: 1300px;
     margin: 0 auto;
     display: flex;
     justify-content: space-between;
     align-items: center;
     color: white;
     
`;
const SNavbarBrand = styled.h2`
font-size: 3rem;
`;
const RightNav = styled.div`
     display: flex;
    gap: 1rem;
`;

const NavRoutes = styled.div`
    display: flex;
    gap: 1rem;
    font-size: 2rem;
    align-items: center;
         @media (max-width: 768px) {
        display: none;
    }
`;
const NavRoute = styled(Link)`
text-decoration:none;
   color: black;
    padding:0.5rem;
    transition:  0.5s ease;
      &:hover{
        transition:  0.5s ease;
        color: black;
        
        background-color: white;
        box-shadow: 9px 0px 10px white;
    }
`;
const LoginButton = styled(Link)`
    padding: 0.7rem 3rem;
    background-color: white;
    border: 1px solid black;
    border-radius: 3rem;
    transition:  0.3.s ease;
     &:hover{
        transition:  0.3.s ease;
        border: 1px solid transparent;
        background-color: yellow;
        box-shadow: 9px 0px 10px yellow;
    }
`;