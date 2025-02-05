import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../../globalStyles";

export const Nav = styled.nav`
    background-color: transparent;
    margin-bottom: -80px;
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    justify-content: center;
    position: absolute;
    top: 0;
    z-index: 50;
    transition: background-color 0.3s ease-in;
`;
export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: start;
    height: 80px;

    ${Container}
`;
export const NavLogo = styled(Link)`
    color: #fff;
    justify-content: flex-start;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    z-index: 50;
`;
export const NavIcon = styled.img`
    margin-right: .5rem;
    width: 1rem;
    background-color: #242482;
`;

export const MobileIcon = styled.div`
    display: none;
    z-index: 50;
    @media screen and (max-width: 960px) {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        font-size: 1.8rem;
        transform: translate(-100%, 60%);
        cursor: pointer;
    }
`;
export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    justify-content: center;
    width: 100%;
    @media screen and (max-width: 950px){
        background-color: blue;
        flex-direction: column;
        position:fixed ;
        width: 100%;
        height: 100vh;
        padding-top: 30%;
        top: 0;
        left: 0;
        opacity: ${({ show }) => (show ? 1 : 0)};
        visibility: ${({show}) => (show ? 1 : 0)};
        transform: transitionY(${({show}) => (show ? '0' : '-10px')});
        transition: opacity 0.5s ease;
        background-color: #071c3f;

    }

    li:first-chid {
        margin-left: auto;
    }
`;
export const NavLink = styled(Link)`
    text-decoration: none;
    margin-left: 40px;
    font-size: 1.3rem;
    color: #fff;
    font-weight: 500;

`;
export const NavItem = styled.li`
height: 80px;
`;
