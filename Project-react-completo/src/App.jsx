import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Pages
import Home from './pages/Home'
import Signup from './pages/SignupPage'
import Pricing from './pages/PricingPage'
import GlobalStyle from './globalStyles';
import Navbar from './components/Navbar/Navbar';

function App() {

  return (
    <>
      <Router>
        <GlobalStyle/>
        <Navbar/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/signup' element={<Signup/>}/>
        
        </Routes>
      </Router>
      
    </>
  )
}

export default App
