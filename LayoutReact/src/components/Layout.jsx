import React from 'react'
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import '../Pages/index.css'


const Layout = () => {
  return (
    <div className='container-layout'>
      <h1>Esto es el layout</h1>
      <Navbar/>
      <Outlet/>
    
    </div>
  );
}

export default Layout