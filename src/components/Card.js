import React, { useState } from 'react'
import '../components/Card.css'
import CardIcon from '../assets/images/card-icon.svg'

const Card = ({ project }) => {

const [ isOpen, setIsOpen ] = useState(false)

// setIsOpen(isOpen.show ? {show: false} : {show: true})


 const handleClickToOpen = event => {
  event.target.closest('.card').classList.add('card--active')
  setIsOpen(true)


 }

//  const handleClickToClose = event => {
//   event.target('.card-container').classList.remove('card-container--active')
//  }
//  onClick={handleClickToClose}



  return (

    <div className='card' onClick={handleClickToOpen}>
      
      <p className='card__category'>{project.category}</p>
      
      <img className='card__image' src={project.image} alt='main image project'/>
      <div className="card__box">
        <img className='card__icon' src={project.icon} alt='icon project'/>
        <div className="card__title-wrapper">
          <h3 className='card__title'>{project.title}</h3>
          <h3 className='card__tech'>{project.tech}</h3>
        </div>
      </div>
      <p className='card__description'>{project.description}</p>
      <p className='card__text'>{project.text}</p>
      <a className="card__visit-wraper" href={project.url} target="_blank">
        <p className='card__visit-text'>visit project</p>
        <img className='card__visit-icon' src={CardIcon} alt='icon explore project'/>
      </a>
    </div>
  )
}

export default Card
