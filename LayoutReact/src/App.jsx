
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product'


function App() {

  return (
    <>
       
      <Routes>
      <Route path='/' element={<Layout/>} >
         <Route index element={<Home/>} />
          <Route path='about' element={<About/>}  />
          <Route path='product' element={<Product/>}  />
</Route>
      </Routes>
    </>
  )
}

export default App
