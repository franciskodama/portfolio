import React from 'react'
import LogoFooter from '../assets/images/logo-fkodama-footer.svg'
import Linkedin from '../assets/images/ico-linkedin-white.svg'
import Insta from '../assets/images/ico-instagram-white.svg'
import Face from '../assets/images/ico-facebook-white.svg'

import '../styles/Footer.css'

function Footer() {
  return (
    <section className='section section-footer'>
        <div className='container'>
          <h2 className='footer-title'>ABOUT<span>ME</span></h2>
          <h2 className='footer-title'>GET<span>BACK</span></h2>
          <h2 className='footer-title'>GET<span>IN TOUCH</span></h2>
          <h2 className='footer-title'>GET<span>CONNECTED</span></h2>

          <p className="aboutme">A Webdeveloper with a huge experience in marketing, a natural leader, curious, who find engagement challenge himself constantly.</p>

          <ul className='menu'>
            <li className='menu-item'>home</li>
            <li className='menu-item'>about</li>
            <li className='menu-item'>testemunials</li>
            <li className='menu-item'>contact</li>
          </ul>

          <div className="contact">
            <p className='email'>fk@fkodama.com</p>
            <p className='send-message'>send message</p>
          </div>

          <div className="icons">
            <img src={Linkedin} alt="logo Linkedin"/>
            <img src={Insta} alt="logo Instagram"/>
            <img src={Face} alt="logo Facebook"/>
          </div>

          <img src={LogoFooter} alt="logo fkodama" />

          <div className="design">
            <p>Designed and built by</p>
            <p className="bold">Francis Kodama</p>
            <p>Copyright 2022</p>
          </div>
        </div>

        <div className='last-container'>
            <div className='resume-container'>
              <h2 className='resume-title'>RESUME</h2>
              <p>Download</p>
              <p className='bold'>Resumé</p>
            </div>
            <p className="localization">Ottawa, ON - <span className='bold'>Canada</span></p>
          </div>

    </section>
  )
}

export default Footer
