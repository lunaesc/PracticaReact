import { Route, Routes } from 'react-router-dom'
import './App.css'
import Menu from './pages/Menu'
import Home from './pages/Inicio'
import About from './pages/About'
import Dashboard from './pages/Dashboard'

function App() {

  return (
    <>
     <div >
      
      <Routes>
        <Route path='/' element={<Menu/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        </Route>
      </Routes>
     </div><h1>Routes</h1>
    </>
  )
}

export default App
