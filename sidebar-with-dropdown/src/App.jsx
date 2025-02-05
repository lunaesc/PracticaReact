import React from 'react'
import Sidebar from './components/Sidebar'
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Overview from './pages/Overview'
import Team from './pages/Team'

import {Reports, ReportsOne, ReportsTwo, ReportsThree} from './pages/Reports'
import Support from './pages/Support'
import Messages from './pages/Messages'
import Products from './pages/Products'

const App = () => {

  
  return (
    <>
   <Router>
       <Sidebar/>
       <Routes>
         <Route path="/" element={<Overview />} />
         <Route path="/reports" element={<Reports />} />
         <Route path="/reports/reports1" element={<ReportsOne />} />
         <Route path="/reports/reports2" element={<ReportsTwo />} />
         <Route path="/reports/reports3" element={<ReportsThree />} />
         <Route path="/team" element={<Team />} />
         <Route path="/support" element={<Support/>} />
         <Route path="/messages" element={<Messages/>} />
         <Route path="/Products" element={<Products/>} />
       </Routes>
     </Router>

    </>
  )
}

export default App