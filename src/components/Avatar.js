import React, {useState } from 'react'
import { avatarData } from '../data/Data'

import LightBulb from '../assets/images/about-lightbulb.svg'
import Puzzle from '../assets/images/about-puzzle.svg'
import Robot from '../assets/images/about-robot.svg'
import Student from '../assets/images/about-student.svg'
import Eye from '../assets/images/about-eye.svg'
import Smile from '../assets/images/about-smile.svg'
import '../components/Avatar.css'

const Avatar = () => {
  
  const [ isShown, setIsShown ] = useState(0)
  
  const handleClick = () => {
    return console.log('test')
 }

  return (
    <div className="outter-container">
      <div className='inner-container'>
          
        <p className='icons-title'>soft skills:</p>

        <div className='icons-wrapper'>          
          <img
            onMouseEnter={() => setIsShown(1)}
            onMouseLeave={() => setIsShown(0)}
            className='avatar-icon' src={LightBulb} alt='creative'
          />

          <img
            onMouseEnter={() => setIsShown(2)}
            onMouseLeave={() => setIsShown(0)}
            className='avatar-icon' src={Puzzle} alt='problem solving'
          />
          
          <img
            onMouseEnter={() => setIsShown(3)}
            onMouseLeave={() => setIsShown(0)}
            className='avatar-icon' src={Robot} alt='passionate for technology'
          />
         
          <img
            onMouseEnter={() => setIsShown(4)}
            onMouseLeave={() => setIsShown(0)}
            className='avatar-icon' src={Student} alt='constant learning'
          />

          <img
            onMouseEnter={() => setIsShown(5)}
            onMouseLeave={() => setIsShown(0)}
            className='avatar-icon' src={Eye} alt='detail oriented'
          />

          <img
            onMouseEnter={() => setIsShown(6)}
            onMouseLeave={() => setIsShown(0)}
            className='avatar-icon' src={Smile} alt='friendly'
          />
        </div>
        
        {/* <iframe className='avatar-image' src='https://my.spline.design/untitled-93c1753c6b5d2f301c418a677de96cc2/' frameborder='0' width='100%' height='100%'></iframe> */}
        <div className="white-square"></div>

          <img className='avatar-image' src={avatarData[isShown].imgUrl} alt='my avatar images' />

          <div className='skills-wrapper'>
              <h3 className='skills-title'>{avatarData[isShown].title}</h3>
              <p className='skills-description'>{avatarData[isShown].description}</p>
          </div>

      </div>     
    </div>
  )
}

export default Avatar
