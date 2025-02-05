import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

import Services from './pages/Services';
import Navigation from './components/Navigation/Navigation';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Products from './pages/Products';
import WebDabelo from './pages/WebDevelop';
import Tecnologias from './pages/Tecnologias'
import Login from './pages/Login'

const App = () => {
  return (
    <>
      <Router>
        {/* El componente Navigation va fuera de <Routes> */}
        <Navigation /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/web-development" element={<WebDabelo/>} />
          <Route path="/services/web-development/Tecnologías" element={<Tecnologias/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
