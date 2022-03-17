import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import '../App.css'
import Logo from '../assets/logo-fkodama.svg'

const  Navbar = () => {
  return (    
    <header className='section section-header'>
      <div className='container'>
          <Link to='/'><img className='logo' src={Logo} /></Link>
          <nav className='navbar'>
              <Link className='nav-item' to='/'> home </Link>  
              <Link className='nav-item' to='/reason'> reason </Link>
              <Link className='nav-item' to='/about'> about </Link>  
              <Link className='nav-item' to='/projects'> projects </Link>  
              <Link className='nav-item' to='/api'> api </Link>
              <Link className='nav-item' to='/contact'> contact </Link>  
          </nav>
      </div>
    </header>
  )
}

export default  Navbar