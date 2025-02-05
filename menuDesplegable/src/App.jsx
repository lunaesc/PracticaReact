
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Contactus from './pages/Contactus'
import Products from './pages/Products'
import Signup from './pages/Signup'
import Marketing from './pages/Marketing'
import Design from './pages/Design'
import Consulting from './pages/Consulting'
import Development from './pages/Development'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/contactus' element={<Contactus/>}/>
      <Route path='/products'  element={<Products/>}/>
    
      <Route path='/signup'  element={<Signup/>}/>
      <Route path='/marketing'  element={<Marketing/>}/>
      <Route path='/design'  element={<Design/>}/>
      <Route path='/consulting'  element={<Consulting/>}/>
      <Route path='/development'  element={<Development/>}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
