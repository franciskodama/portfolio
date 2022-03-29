

import React, { useState } from 'react'
import '../components/WhyCard.css'
import EyeOpen from '../assets/images/why-eye-open.svg'
import EyeClosed from '../assets/images/why-eye-closed.svg'
import Hey from '../assets/images/why-hey.svg'
import  Flag from '../assets/images/why-icon-flag.svg'
import  Bolt from '../assets/images/why-icon-bolt.svg'
import  Brush from '../assets/images/why-icon-brush.svg'
import  Robot from '../assets/images/why-icon-robot.svg'
import Check from '../assets/images/why-icon-check.svg'

const WhyCard = () => {
  
  const [ currentEye, setCurrentEye ] = useState(false)
  

  
  return (
    
    <div className='why-container'>

        <button className='why-toggle'>
            <img className='eye' src={EyeClosed} alt='icon eye' />
            <span className="why-toggle__label">Click me</span>
        </button>

        <ul className='why'>

          <li className='why__item'>
            <h2 className='why__title why__title--flag'>WHY?</h2>
            <p className='why__desc'>This portfolio was created to help me gain a deeper understanding and practice of the languages I work with.</p>
          </li>

          <li className='why__item'>
            <h2 className='why__title why__title--bolt'>SHOWCASE</h2>
            <p className='why__desc'>In addition, the portfolio displays my varied skills which go since the conception of the project, creativity, design, and coding.</p>
          </li>

          <li className='why__item'>
            <h2 className='why__title why__title--brush'>TOOLS USED</h2>
            <p className='why__desc'>Figma, Adobe Photoshop, and VS Code</p>
          </li>

          <li className='why__item'>
            <h2 className='why__title why__title--robot'>TECH USED</h2>
            <p className='why__desc'>HTML, CSS, Javascript, React, Sass, NPM, and GIT</p>
          </li>

          <li className='why__footer'>
            <img className='why__icon' src={Check} alt='icon check'/>
            <p className='why__text'>This portfolio was 100% created and programmed by Francis Kodama.</p>
          </li>

        </ul>
    </div>
  )
}

export default WhyCard
