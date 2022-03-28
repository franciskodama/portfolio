

import React, { useState } from 'react'
import '../components/WhyCard.css'
import EyeOpen from '../assets/images/why-eye-open.svg'
import EyeClosed from '../assets/images/why-eye-closed.svg'
import Hey from '../assets/images/why-hey.svg'
import  Flag from '../assets/images/why-icon-flag.svg'
import  Bolt from '../assets/images/why-icon-bolt.svg'
import  Brush from '../assets/images/why-icon-brush.svg'
import  Robot from '../assets/images/why-icon-robot.svg'
import Alert from '../assets/images/why-icon-alert-red.svg'

const WhyCard = () => {
  
  const [ currentEye, setCurrentEye ] = useState(false)
  

  
  return (
    
    <div className='why'>
        <div className='why__eye-wrapper'>
            <div className='why__eye-wrapper'>
              <img className='eye' src={EyeClosed} alt='icon eye' />
            </div>
            <div className='why__button-wrapper'>
              <img className='why__button' src={Hey} alt='icon press and hold' />
            </div>
        </div>

        <div className='why__info-container'>

          <div className='single-container'>
            <div className='single__wrapper-icon-title'>
              <img className='icon' src={Flag} alt='icon bolt'/>
              <h2 className='single__title'>WHY?</h2>
            </div>
            <p className='single__info'>This portfolio was created to help me gain a deeper understanding and practice of the languages I work with.</p>
         </div>

          <div className='single-container'>
            <div className='single__wrapper-icon-title'>
              <img className='icon' src={Bolt} alt='icon bolt'/>
              <h2 className='single__title'>WHY?</h2>
            </div>
            <p className='single__info'>This portfolio was created to help me gain a deeper understanding and practice of the languages I work with.</p>
          </div>
        
          <div className='single-container'>
            <div className='single__wrapper-icon-title'>
              <img className='icon' src={Brush} alt='icon bolt'/>
              <h2 className='single__title'>WHY?</h2>
            </div>
            <p className='single__info'>This portfolio was created to help me gain a deeper understanding and practice of the languages I work with.</p>
          </div>

          <div className='why__ps-container'>
            <img className='icon icon-last' src={Alert} alt='icon alert ps'/>
            <p className='ps__info'>This portfolio was 100% created and programmed by Francis Kodama.</p>
          </div>

        </div>
    </div>
  )
}

export default WhyCard
