import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Drawer = ({isOpen, toggleDrawer, routes}) => {
  return (
    <>
        {isOpen && <Backdrop onClick={toggleDrawer}/>}
        <SDrawer isOpen={isOpen}>
        <RightNav>
        <SNavbarBrand>LOGO</SNavbarBrand>
            <NavRoutes onClick={toggleDrawer}>
                {routes.map((route) => (
                    <NavRoute to={route.link} key={route.name}>
                        {route.name}
                    </NavRoute>
                ))}
            </NavRoutes> 
            <LoginButton to='/login'>Login</LoginButton>
        </RightNav>
        </SDrawer>
        
    </>
  )
}

export default Drawer;
const SNavbarBrand = styled.h2`
font-size: 3rem;
`;

const Backdrop = styled.div`
    height: 600vh;
    width: 100%;
    z-index: 100;
    position: absolute;
    top: 0;
    left: 0;
       transition:  0.3s ease;

    background-color: rgba(0, 0, 0, 0.2);
`;
const DrawerButoon = styled.button`
     all: unset;
    font-size: 3rem;
    display: grid;
`;
const DrawerHead = styled.div`
    display: flex;
     justify-content: space-between;
     padding: 1rem;
     margin-right: 20px;
     border-bottom: 1px solid black;
     
`;


const SDrawer = styled.div `
    
    z-index: 150;
    position: absolute;
    top: 0;
    height: 100vh;
    width: 60%;
    background-color: red;
   transition:  0.3s all ease-in;

    transform: translateX(${(props) => (props.isOpen ? "0" : "-100%")});
`;

const RightNav = styled.div`
     display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 1rem;
    
`;

const NavRoutes = styled.div`


       
`;
const NavRoute = styled(Link)`
    display: flex;
    text-decoration: none;
    color: black;
    font-size: 2.5rem;
    padding: 1rem;
`;
const LoginButton = styled(Link)`
    padding: 0.7rem 3rem;
    background-color: white;
    border: 1px solid black;
    border-radius: 3rem;
    transition:  0.3.s ease;
    align-self: flex-start;
     &:hover{
        transition:  0.3.s ease;
        border: 1px solid transparent;
        background-color: yellow;
        box-shadow: 9px 0px 10px yellow;
    }
`;