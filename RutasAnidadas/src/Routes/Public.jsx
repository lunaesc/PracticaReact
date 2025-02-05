import React from 'react'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Registro from '../Pages/Registro'
import Login from '../Pages/Login'
import NotFound from '../Pages/NotFound'
import Informacion from '../components/Informacion'

const Public = () => {
  return (
    <div className="">
    <h1>Conceptos básicos de rutas</h1>
    <BrowserRouter>
    <Menu/>
    
    <Routes>
     
        <Route path='/' element={<Home/>}/>
        <Route path='/registro' element={<Registro/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/*' element={<NotFound/>}/>
       
      
    </Routes>
    <Footer/>
    </BrowserRouter>
  </div>
  )
}

export default Public