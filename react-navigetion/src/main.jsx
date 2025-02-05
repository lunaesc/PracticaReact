import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{margin:0;
padding:0;
box-sizing:border-box;}

html, body{
    font-family: sans-serif;
    font-size: 62.5%;

    @media (max-width: 768px) {
        font-size: 50%;
    }
    @media (max-width: 450px) {
        font-size: 40%;
    }
}

`;


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
    <App/>
  </React.StrictMode>,
)
