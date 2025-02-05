import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SubRouteWebDeve = ({subRoute}) => {
  return (
    <SRouteWebDevel>
            <SubMenuButton>{subRoute.name}</SubMenuButton>
        <SRoutesContainer>
       {subRoute.subRoutesWebDeve.map((subRouteWeb) => (
        <SubMenuLink to={subRouteWeb.link} key={subRouteWeb.name} >{subRouteWeb.name}</SubMenuLink>
       ))}
           
        </SRoutesContainer>
        </SRouteWebDevel>
    )
}

export default SubRouteWebDeve;

const SRouteWebDevel = styled.div``;
const SubMenuButton = styled.div``;
const SRoutesContainer = styled.div``;
const SubMenuLink = styled(Link)``;
