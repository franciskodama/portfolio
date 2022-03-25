import React from 'react'
import { Link } from 'react-scroll'
import LogoFooter from '../assets/images/logo-fkodama-footer.svg'
import Linkedin from '../assets/images/ico-linkedin-white.svg'
import Insta from '../assets/images/ico-instagram-white.svg'
import Face from '../assets/images/ico-facebook-white.svg'
import Git from '../assets/images/ico-github-white.svg'

import '../styles/Footer.css'

function Footer() {
  return (
    <section className='section section-footer'>
        <div className='container'>
          <h2 className='footer-title'>ABOUT<span>ME</span></h2>
          <h2 className='footer-title'>GET<span>BACK</span></h2>
          <h2 className='footer-title'>GET<span>IN TOUCH</span></h2>
          <h2 className='footer-title'>GET<span>CONNECTED</span></h2>

          <p className='aboutme'>A Webdeveloper with a huge experience in marketing, a natural leader, curious, who find engagement challenge himself constantly.</p>

          <div className='menu'>
            <Link className='menu-item' to='hero' spy={true} smooth={true} offset={50} duration={500}> home </Link>
            <Link className='menu-item' to='about' spy={true} smooth={true} offset={-150} duration={500}> about </Link>
            <Link className='menu-item' to='projects' spy={true} smooth={true} offset={-100} duration={500}> projects </Link>
            <Link className='menu-item' to='api' spy={true} smooth={true} offset={-150} duration={500}> api </Link>
            <Link className='menu-item' to='code' spy={true} smooth={true} offset={0} duration={500}> clean code </Link>
            <Link className='menu-item' to='contact' spy={true} smooth={true} offset={-150} duration={500}> contact </Link>
          </div>

          <div className='contact'>
            <p className='email'>fk@fkodama.com</p>
            <Link className='send-message' to='contact' spy={true} smooth={true} offset={-150} duration={500}> send message </Link>
          </div>

          <div className='icons'>
            <a className='icon-item' href="https://github.com/franciskodama" target="_blank"><img src={Git} alt='logo Github'/></a>
            <a className='icon-item' href="https://www.linkedin.com/in/kodama/" target="_blank"><img src={Linkedin} alt='logo Linkedin'/></a>
            <a className='icon-item' href="https://www.instagram.com/franciskodama/" target="_blank"><img src={Insta} alt='logo Instagram'/></a>
            <a className='icon-item' href="https://www.facebook.com/francishidekikodama" target="_blank"><img src={Face} alt='logo Facebook'/></a>
          </div>

          <img src={LogoFooter} alt='logo fkodama' />

          <div className='design'>
            <p>Designed and built by</p>
            <p className='bold'>Francis Kodama</p>
            <p>Copyright 2022</p>
          </div>
        </div>

        <div className='last-container'>
            <div className='resume-container'>
              <h2 className='resume-title'>RESUME</h2>
              <p>Download</p>
              <p className='bold'>Resumé</p>
            </div>
            <p className='localization'>Ottawa, ON - <span className='bold'>Canada</span></p>
          </div>

    </section>
  )
}

export default Footer
