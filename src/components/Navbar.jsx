import React from 'react';
import logo from '../assets/Airbnb.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='logo-container'>
        <img src={logo} alt='airbnb-logo' className='airbnb-logo'/>
    </div>
  )
}

export default Navbar