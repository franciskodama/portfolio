import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import '../App.css'
import Logo from '../assets/logo-fkodama.svg'

const  Navbar = () => {
  return (    
    <header className='section section-header'>
      <div className="container">
          <img className="logo" src={Logo} />
          <nav className="navbar">
              <Link className="nav-item" to='/'>about</Link>  
              <Link className="nav-item" to='/'>explanation</Link>
              <Link className="nav-item" to='/'>projects</Link>  
              <Link className="nav-item" to='/'>API example</Link>  
              <Link className="nav-item" to='/'>skills</Link>
              <Link className="nav-item" to='/'>contact</Link>  
          </nav>
      </div>
    </header>
  )
}

export default  Navbar