import React from 'react'
import { Link} from 'react-router-dom'
import styled from 'styled-components';
import SubRouteWebDeve from './SubRouteWebDeve';


 

const Menu = ({isOpen, toggleDrawer, route}) => {
  return (
  <SMenu isOpen={isOpen}>
    <MenuButton onClick={toggleDrawer}>{route.name}</MenuButton>
    < SubRoutesContainer onClick={toggleDrawer}>
        {route.subRoutes.map((subRoute) => {
            if (subRoute.subRoutesWebDeve){
                return <SubRouteWebDeve subRoute={subRoute} key={subRoute.name} />
            }       
            
            return (
                <SubRoute to={subRoute.link} key={subRoute.name} onClick={toggleDrawer}>
                {subRoute.name}
                </SubRoute>
           ); 
        })}
    </SubRoutesContainer>
  </SMenu>
    
  )
}

export default Menu;

const SubRoutesContainer = styled.div`
    position:absolute;
    min-width: 32rem;
    display:flex;
    flex-direction:column;
    box-shadow: 0 8px 16px 0px rgba(0, 0, 0, .2);
    padding: 1rem;
    left: -1rem;
     border-radius: 1rem;
     transform-origin:top ;
    transform: scaleY(0);
    visibility: hidden;
    opacity: 0; 
     background-color: red;

`;
const SMenu = styled.div`
    position: relative;
    display: inline-block;
        &:hover ${SubRoutesContainer} {
         opacity: 1;
    transform: none;
    visibility: visible;
    transition:  all 0.5s ease;
    }
`;
const MenuButton = styled.div`
    padding: 1rem;
    color: red;
        &:hover{
            transition: 0.5s ease;
            color: black;
            background-color: white;
            box-shadow: 0 0 10px white;
        }
`;

const SubRoute = styled(Link)`
 background-color: orange;
text-decoration:none;
color: black;
    padding: 1rem;
    border-radius: 0.5rem;
    &:hover{
        transition: 0.3s ease-in;
        color: #5f07f6;
        background-color: gray;
        
    }
`;