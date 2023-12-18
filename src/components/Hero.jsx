import React from 'react'
import photoGrid from '../assets/masonry.jpg'
import './Hero.css';

const Hero = () => {
  return (
    <div>
        <div className="grid-container">
            <img src={photoGrid} alt='grid' className='grid'/>
        </div>

        <div className="experience">
            <h2>Online Experiences</h2>
            <p>
                Join unique interactive activities led by one-of-a-kind hosts - all without leaving home.
            </p>
        </div>
    </div>
  )
}

export default Hero