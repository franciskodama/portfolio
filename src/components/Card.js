import React from 'react'
import '../components/Card.css'
import CardIcon from '../assets/images/card-icon.svg'

function Card({ project }) {

 const handleClick = e => {
   e.target.closest('.card-container').classList.add('card-container--active')
  console.log(e.target)
 }

  return (

    <div onClick={handleClick} className='card-container'>
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
