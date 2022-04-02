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
            <h3 className='card-front__title'>{project.titleA}</h3>
            <h3 className='card-front__tech'>{project.tech}</h3>
          </div>
        </div>
        <p className='card-front__text'>{project.frontText}</p>
      </div>

      <div className='card-back'>
        
        <div className='card-back__header'>
          <p className='card-back__category'>{project.category}</p>
          <img className='card-back__close' onClick={handleClickToClose} src={IconClose} alt='close button'/>
        </div>

        <img className='card-back__image' src={project.image} alt='main image project'/>
        <h3 className='card-back__main-title'><span style={{ color: 'red' }}>{project.titleB}</span>{project.titleC}</h3>
        
        <div className="card-back__info-wrapper">
          <p className='card-back__text'>{project.backText}</p>
          <h4 className='card-back__title icon-purpose'>purpose</h4>
          <p className='card-back__purpose'>{project.backTextPurpose}</p>
          <h4 className='card-back__title icon-robot'>tech</h4>
          <p className='card-back__tech'>{project.backTextTech}</p>

          <a className='card-back__visit-wraper' href={project.url} target='_blank'>
            <p className='card-back__visit icon-visit'>visit project</p>
          </a>
        </div>
      </div>

    </div>
  )
}

export default Card
