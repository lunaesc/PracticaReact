
import { Link } from "react-router-dom"
import styled from "styled-components"
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from  "react-icons/ai";
import { useState } from "react";
import { SidebarData } from "./SidebarData";
import Submenu from "./Submenu";

const HeaderNav = styled.header`

  position: sticky;
  top:0;
  left:0;
  width: 100%;
  background: red;
  height: 80px;
  display:flex;
  justify-content:flex-start;
  align-items:center;
  z-index: 10;
`;

const Nav = styled.nav`



`;

const NavIcon = styled(Link)`

     margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
 color: white;
`;
const SidebarNav = styled.nav`

 background-color: #15171c;
width: 250px;
height: 100vh;

display: flex;
justify-content: center;
  position: absolute;
top: 0;
left: ${({sidebar }) => (sidebar ? '0' : '-100%')};
transition: 350ms;
z-index: 10;

`;

const SidebarWrap = styled.div`
width: 100%;

`;

const Sidebar = () => {
  
  const [sidebar, setSidebar] = useState(false)
  
  const showSidebar = () => setSidebar(!sidebar)
  return (
    <>
    <HeaderNav>
    <Nav>
      <NavIcon to='#'>
        <FaIcons.FaBars onClick={showSidebar}/>
      </NavIcon>
    </Nav>
    <SidebarNav sidebar={sidebar}>
      <SidebarWrap>
        <NavIcon onClick={showSidebar} to='#'>
          <AiIcons.AiOutlineClose onClick={showSidebar}/>
        
        </NavIcon>
        {SidebarData.map((item, index) => {
          return <Submenu onClick={showSidebar} item={item} key={index} />;
        })}
      </SidebarWrap>
    </SidebarNav>
    </HeaderNav>
    </>
  )
}

export default Sidebar