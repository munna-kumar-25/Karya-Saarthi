import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
           <h1>Your Work Companion - Solution at Doorstep</h1> 
           <p>From thesis writing to website development, we connect you with trusted experts who teach while helping. Get work done + learn new skills!</p>
              <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
        </div>
        </div>
      
  )
}

export default Hero
