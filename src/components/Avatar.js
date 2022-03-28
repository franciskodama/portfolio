import React, {useState } from 'react'
import LightBulb from '../assets/images/about-lightbulb.svg'
import Puzzle from '../assets/images/about-puzzle.svg'
import Robot from '../assets/images/about-robot.svg'
import Student from '../assets/images/about-student.svg'
import Eye from '../assets/images/about-eye.svg'
import Smile from '../assets/images/about-smile.svg'

import Me from '../assets/images/about-me.png'
import Creative from '../assets/images/avatar-creative.jpg'
import Problem from '../assets/images/avatar-problem.jpg'
import Tech from '../assets/images/avatar-tech.jpg'
import Learner from '../assets/images/avatar-learner.jpg'
import Detail from '../assets/images/avatar-detail.jpg'
import Friendly from '../assets/images/avatar-friendly.jpg'

import '../components/Avatar.css'

const Avatar = () => {

  const avatarData = [
    { key: 0,
      title: 'Francis Kodama',
      description: `I'm an experienced tech services entrepreneur/consultant - product designer oriented, with experience in product design, UX/UI.`,
      imgUrl: require('../assets/images/about-me2.png')
    },
    { key: 1,
      title: 'creative',
      description: 'I am super duper Creative!',
      imgUrl: require('../assets/images/avatar-creative.jpg')  
    },
    { key: 2,
      title: 'problem solving',
      description: 'I am super duper problem solving!',
      imgUrl: require('../assets/images/avatar-problem.jpg')   
    },
    { key: 3,
      title: 'tech lover',
      description: 'I am super duper tech lover!',
      imgUrl: require('../assets/images/avatar-tech.jpg')  
    },
    { key: 4,
      title: 'constant learner',
      description: 'I am super duper constant learner, bitch!',
      imgUrl: require('../assets/images/avatar-learner.jpg')  
    },
    { key: 5,
      title: 'details oriented',
      description: 'I am super duper details oriented!',
      imgUrl: require('../assets/images/avatar-detail.jpg')    
    },
    { key: 6,
      title: 'friendly',
      description: 'I am super duper friendly!',
      imgUrl: require('../assets/images/avatar-friendly.jpg')  
    }
  ]
  
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
