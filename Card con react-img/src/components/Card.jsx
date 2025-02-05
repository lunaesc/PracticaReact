import React from 'react'
import Nave from '../assets/img/nave-volando.jpeg'
import Auto from '../assets/img/auto-arboles.jpeg'
import ManoRobot from '../assets/img/mano-robot-escribiendo-pantalla.jpeg'

const Card = () => {
  return (
    <>
    <div>
        <h1>hola carme</h1>
        <div className="">

            <img src={Nave} alt="" />
            <img src={Auto} alt="" />
            <img src={ManoRobot} alt="" />
        </div>
    </div>
    </>
  )
}

export default Card