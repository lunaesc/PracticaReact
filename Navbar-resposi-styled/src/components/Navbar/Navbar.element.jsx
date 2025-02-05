import styled from "styled-components";

export const NavbarContainer = styled.div`
    width: 100%;
    height: 88px;
    position: sticky;
    top: 0;
    z-index: 99;
    background-color: #49426c;
`;
export const NavbarWrapper = styled.div`
    margin: auto;
    width:100%;
    max-width: 1300px;
    height: 100%;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media screen and (max-width: 960px){
        width: 85%;
    }
`;

export const IconLogo = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
   font-family: "Oswald", sans-serif;
   font-size: 1.3rem;
   color: #ebc88b;
`;

export const Menu = styled.ul`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 960px) {
        width: 100%;
        height: 89vh;
        position: absolute;
        top: 80px;
        left: ${({click}) => click ? 0 : '-100%'};
        flex-direction: column;
        transition: 0.5s all ease-in ;
        background-color: #40426c;
    }
`;

export const Menuitem = styled.li`
    height: 100%;
    padding: 0 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    font-family: "Oswald", sans-serif;
    font-weight: 400;
    @media screen and (max-width: 960px){
        width: 100%;
        height: 70px;
    }
  
`;

export const MenuitemLink = styled.a`

    color: #ebc88b;
    &:hover{
        
        border-bottom: 0.3rem solid #ebc88b;
        transition: 0.4s ease-in;
    }

`;

export const IconLogoMobile = styled.div`

        display: flex;
     color: #ebc88b ;
     font-size: 2rem;
  
    @media screen and (max-width: 960px){
        display: flex;
     color: #ebc88b ;
     font-size: 2rem;
    }
`;