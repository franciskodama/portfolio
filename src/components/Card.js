import React, { useState } from 'react'
import '../components/Card.css'
import IconClose from '../assets/images/card-icon-close.svg'

const Card = ({ project }) => {

const [ isOpen, setIsOpen ] = useState(false)

// setIsOpen(isOpen.show ? {show: false} : {show: true})


 const handleClickToOpen = (e) => {
  e.target.closest('.card').classList.add('card--active')
  setIsOpen(true)
 }

const handleClickToClose = (e) => {
  e.target('.card-front__close').classList.remove('card--active')
  setIsOpen(false)
}


//  const handleClickToClose = event => {
//   event.target('.card-container').classList.remove('card-container--active')
//  }
//  onClick={handleClickToClose}



  return (
   
    <div className='card'>

      <div className='card-front' onClick={handleClickToOpen}>
        <p className='card-front__category'>{project.category}</p>
        <div className='card-front__box'>
          <img className='card-front__icon' src={project.icon} alt='icon project'/>
          <div className='card-front__title-wrapper'>
            <h3 className='card-front__title'>{project.title}</h3>
            <h3 className='card-front__tech'>{project.tech}</h3>
          </div>
        </div>
        <p className='card-front__description'>{project.description}</p>
      </div>

      <div className='card-back'>
        
        <div className='card-back__header'>
          <p className='card-back__category'>{project.category}</p>
          <img className='card-back__close' onClick={handleClickToClose} src={IconClose} alt='close button'/>
        </div>

        <img className='card-back__image' src={project.image} alt='main image project'/>
        <h3 className='card-back__main-title'><span>game.</span>Pac Man</h3>
        
        <div className="card-back__info-wrapper">
          <p className='card-back__descrition'>100% React-based, it was the most important project I used to learn and display my skills in HTML, JSX, CSS, Javascript, and the React framework.</p>
          <h4 className='card-back__title icon-purpose'>purpose</h4>
          <p className='card-back__purpose'>100% React-based, it was the most important project I used to learn and display my skills in HTML, JSX, CSS, Javascript, and the React framework.</p>
          <h4 className='card-back__title icon-robot'>tech</h4>
          <p className='card-back__tech'>100% React-based, it was the most important project I used to learn and display my skills in HTML, JSX, CSS, Javascript, and the React framework.</p>

          <a className='card-back__visit-wraper' href={project.url} target='_blank'>
            <p className='card-back__visit icon-visit'>visit project</p>
          </a>
        </div>
      </div>

    </div>
  )
}

export default Card
