import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import '../styles/Navbar.css'
import '../App.css'
import Logo from '../assets/logo-fkodama.svg'


const  Navbar = () => {
    
  return (    
    <header className='section section-header'>
      <div className='container'>
          <Link to='hero' spy={true} smooth={true} offset={50} duration={500}><img className='logo' src={Logo} /></Link>
          <nav className='navbar'>
              <Link className='nav-item' to='hero' spy={true} smooth={true} offset={50} duration={500}> home </Link>  
              <Link className='nav-item' to='about' spy={true} smooth={true} offset={-150} duration={500}> about </Link>  
              <Link className='nav-item' to='projects' spy={true} smooth={true} offset={-100} duration={500}> projects </Link>  
              <Link className='nav-item' to='api' spy={true} smooth={true} offset={-150} duration={500}> api </Link>
              <Link className='nav-item' to='code' spy={true} smooth={true} offset={0} duration={500}> clean code </Link>
              <Link className='nav-item' to='contact' spy={true} smooth={true} offset={-150} duration={500}> contact </Link>  
          </nav>
      </div>
    </header>
  )
}

export default  Navbar