import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const SidebarLink = styled(Link)`
 
display: flex;
  color: #e1e9fc;
 
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;

    &:hover {
    background: #252831;
    border-left: 4px solid #632ce4;
    cursor: pointer;
    }
    `;
const SidebarLabel = styled.span`
 
  margin-left: 19px;
    `;
    
const DropdownLink = styled(Link)`

  background: #252831;
   height: 60px;
   display: flex;
   color: #f5f5f5;
   align-items: center;
    text-decoration: none;
    font-size: 18px;
    background: #632ce4;
 &:hover {
    background: #632ce4;
    cursor: pointer;
 }
  
 `;
  const Container = styled.div``;

const Submenu = ({ item }) => {

  const [subnav, setSubnav] = useState(false)

  const showSidebar = () =>setSubnav(!subnav)

  return (
    <>
    <Container>
      <SidebarLink to={item.path} onClick={item.subNav && showSidebar}>
          <div>
          {item.icon}
            <SidebarLabel >{item.title}</SidebarLabel>
          </div>
          <div>
            {item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null}
          </div>
      </SidebarLink >
      {subnav && item.subNav.map((item, index) => {
        return (
          <DropdownLink to={item.path} key={index}>
            <SidebarLabel>{item.title}</SidebarLabel>
          </DropdownLink>
        )
      })}
      </Container>
    </>
  );
};

export default Submenu