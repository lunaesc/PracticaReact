
import { Route, Switch, Redirect } from 'react-router-dom'
import './App.css'
import Card from './components/Card'

function App() {
 
  return (
    <>
    <Switch>
      <Route exact path='/' Component={Card}/>
      <Redirect to='/'/>
    </Switch>
    
    </>
  )
}

export default App
