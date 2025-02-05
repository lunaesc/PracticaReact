// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import styled from 'styled-components'
// import { menuData } from './Data/DataMenu'
// import { FaBars, FaTimes } from 'react-icons/fa'

// const Navbar = () => {

//   const [click, setClick] = useState(false);
//   const handleClick = () => setClick(!click);
//   return (
//     <NavHeader>
//       <NavLink to="/">
//       Portafolio
//       </NavLink>
//       <NavMenuUl active={click}>
//         {menuData.map((rouMenu) => (
          
//           <NavLi key={rouMenu.title}>
//           <NavLinkLi to={rouMenu.link}>{rouMenu.title}</NavLinkLi>
//           </NavLi>
//         ))}
        
//       </NavMenuUl>
//       <IconMenu onClick={handleClick}>
//         {click ? ( <FaTimes/>) : (<FaBars/>)}
//        </IconMenu>
//     </NavHeader>
//   )
// }

// export default Navbar

// const NavHeader = styled.header`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 1rem;
    
//   @media (max-width: 1040px) {
    
//   }
// `;

// const  NavLink = styled(Link)`
//   font-size: 30px;
//   font-weight: 700;
//   @media screen and (max-width: 1040px) {
//       padding: 2rem 0;
//    }
// `;

// // const  = styled.header`

// // `;
// const NavMenuUl = styled.ul`
//   display: flex;

//   @media screen and (max-width: 1040px) {
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     width: 100%;
//     height: 100vh;
//     background: rgba(0, 0, 0, 0.9);
//     position: absolute;
//     top: 0;
//       left: ${({ active }) => (active ? "0" : "-100%")};
//     z-index: 10; /* Asegúrate de que el menú esté visible */
//     transition: left 0.3s ease-in-out; /* Animación suave */
//   }
// `;

// const NavLi = styled.li`
//   padding:  0 1rem;
//     @media screen and (max-width: 1040px) {
//       padding: 1rem 0;
//    }
// `;

//  const IconMenu = styled.div`
//   color: #fff;
//   font-size: 20px;
//   display: none;

//   @media screen and (max-width: 1040px) {
//       display: initial;
//    }
//  `;

// // const  = styled.header``;

//  const NavLinkLi = styled(Link)`
// font-size: 1.2rem;
// font-weight: 500;
//   text-decoration: none;
//  `;

//  const NavBtn = styled.button`
//   padding: 12px 32px;
//   font-size: 1rem;
//   text-transform: uppercase;
//   background: rgb(221, 255, 15);
//   color: #222;
//   border: 1px solid #fff;
//   font-weight: 600;
//   cursor: pointer;
//   &:hover{
//     background: rgba(255, 255, 255, 0.2);
//     transition: 0.3s;
//     color: #fff;
//   }
// `;

// const NavBtnLight = styled.header`
//   background: transparent;
//   color: #fff;
// `;