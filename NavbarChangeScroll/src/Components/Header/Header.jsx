import './Header.css';
import ImgGrande from '../../assets/img-grande.jpg'
import React from 'react'

const Header = () => {
  return (
    <div className='header'>
        <div className="img">
            <div className="">
                <img src={ImgGrande} alt="" />
            </div>
            <div className="Overlay"></div>
        </div>
        <div className="Content">
            <h6>It's Allf About What You Think</h6>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor quasi magcnam error similique officiis.</p>
            <button className="btn">Read More</button>
        </div>
    </div>
  )
}

export default Header