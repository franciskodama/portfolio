

import React, { useState } from 'react'
import EyeOpen from '../assets/images/why-eye-open.svg'
import EyeClosed from '../assets/images/why-eye-closed.svg'
import Hey from '../assets/images/why-hey.svg'
import  Flag from '../assets/images/why-icon-flag.svg'
import  Bolt from '../assets/images/why-icon-bolt.svg'
import  Brush from '../assets/images/why-icon-brush.svg'
import  Robot from '../assets/images/why-icon-robot.svg'


const WhyCard = () => {
  
  const [ currentEye, setCurrentEye ] = useState(false)
  

  
  return (
    
    <div className='why'>
        <div className="why__eye-wrapper">
            <img src={currentEye} alt="icon eye" className="eye"/>
            <img src={PressAndHold} alt="icon press and hold" className="press"/>
        </div>
        

    </div>
  )
}

export default WhyCard


 className='card'
    
