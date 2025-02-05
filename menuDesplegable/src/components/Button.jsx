import React from 'react'
import { Link } from 'react-router-dom'
import "../components/Button.css"

function Button() {
  return (
    <Link to="signup">
    <button className='btn'>sign Up</button>
    </Link>
  )
}

export default Button