import React from 'react'
import photoGrid from '../assets/masonry.jpg'

const Hero = () => {
  return (
    <div>
        <div className="grid-container">
            <img src={photoGrid} alt='grid' className='grid'/>
        </div>

        <h2>Online Experiences</h2>
        <p>
            Join unique interactive activities led by one-of-a-kind hosts - all without leaving home.
        </p>
    </div>
  )
}

export default Hero