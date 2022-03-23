import React, { useState } from 'react'
import '../components/Card.css'
import CardIcon from '../assets/images/card-icon.svg'

function Card({ project }) {

const [ isOpen, setIsOpen ] = useState(false)

// setIsOpen(isOpen.show ? {show: false} : {show: true})


 const handleClickToOpen = event => {
  event.target.closest('.card-container').classList.add('card-container--active')
  setIsOpen(true)


 }

//  const handleClickToClose = event => {
//   event.target('.card-container').classList.remove('card-container--active')
//  }
//  onClick={handleClickToClose}



  return (

    <div className='card-container' onClick={handleClickToOpen}>
      
      <p className='card-category'>{project.category}</p>
      
      <img className='card-image' src={project.image} alt='main image project'/>
      <div className="card-box">
        <img className='card-icon' src={project.icon} alt='icon project'/>
        <div className="title-wrapper">
          <h3 className='card-title'>{project.title}</h3>
          <h3 className='card-tech'>{project.tech}</h3>
        </div>
      </div>
      <p className='card-description'>{project.description}</p>
      <p className='card-text'>{project.text}</p>
      <a className="explore-wraper" href={project.url} target="_blank">
        <p className='card-explore' >visit project</p>
        <img className='card-icon-visit' src={CardIcon} alt='icon explore project'/>
      </a>
    </div>
  )
}

export default Card
