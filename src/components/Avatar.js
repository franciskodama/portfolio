import React, {useState } from 'react'
import Me from '../assets/images/about-me.png'
import LightBulb from '../assets/images/about-lightbulb.svg'
import Puzzle from '../assets/images/about-puzzle.svg'
import Robot from '../assets/images/about-robot.svg'
import Student from '../assets/images/about-student.svg'
import Eye from '../assets/images/about-eye.svg'
import Smile from '../assets/images/about-smile.svg'

import Creative from '../assets/images/avatar-creative.jpg'
import Problem from '../assets/images/avatar-problem.jpg'
import Tech from '../assets/images/avatar-tech.jpg'
import Learner from '../assets/images/avatar-learner.jpg'
import Detail from '../assets/images/avatar-detail.jpg'
import Friendly from '../assets/images/avatar-friendly.jpg'

import '../components/Avatar.css'

function Avatar() {

  const imagesGallery = [
    { key: 1,
      title: 'creative',
      bodyText: 'I am super duper Creative!',
      imgUrl: '../assets/images/avatar-creative.jpg'    
    },
    { key: 2,
      title: 'problem solving',
      bodyText: 'I am super duper Creative!',
      imgUrl: '../assets/images/avatar-creative.jpg'    
    },
    { key: 3,
      title: 'tech lover',
      bodyText: 'I am super duper tech lover!',
      imgUrl: '../assets/images/avatar-creative.jpg'    
    },
    { key: 4,
      title: 'constant learner',
      bodyText: 'I am super duper constant learner, bitch!',
      imgUrl: '../assets/images/avatar-creative.jpg'    
    },
    { key: 5,
      title: 'details oriented',
      bodyText: 'I am super duper details oriented!',
      imgUrl: '../assets/images/avatar-creative.jpg'    
    },
    { key: 6,
      title: 'friendly',
      bodyText: 'I am super duper friendly!',
      imgUrl: '../assets/images/avatar-creative.jpg'
    }
  ]
  
  // const [ isShown, setIsShown ] = useState(0)

  const handleClick = () => {
    return alert('test')
 }

  return (
    <div className='out-container'>
      <div className='inner-container'>
          
          <div className='icons-container'>
          
          {/* <button onClick={handleClick}>CLICK</button> */}


          <p className='icons-title'>soft skills:</p>
          
          <img
            // onMouseEnter={() => setIsShown(1)}
            // onMouseLeave={() => setIsShown(0)}
            className='avatar-icon' src={LightBulb} alt='creative' />

          <img 
            // onMouseOver={showImage}
            className='avatar-icon' src={Puzzle} alt='problem solving' />

          
          <img
            onClick={handleClick}
            className='avatar-icon' src={Robot} alt='passionate for technology' />
         
          <img className='avatar-icon' src={Student} alt='constant learning' />
          <img className='avatar-icon' src={Eye} alt='detail oriented' />
          <img className='avatar-icon' src={Smile} alt='friendly' />
          </div>

          <div className='avatar-description-container'>

          
          
          <img className='avatar-image' src={Me} alt='my avatar' />
          
          
          
          <div className='skills-container'>
              <h3 className='skills-title'>creative</h3>
              <p className='skills-description'>I'm an experienced tech services entrepreneur/consultant - product designer oriented, with experience in product design, UX/UI.</p>
          </div>
          </div>

      </div>     
    </div>
  )
}



export default Avatar
