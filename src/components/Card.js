import React from 'react'
import '../components/Card.css'
import CardIcon from '../assets/images/card-icon.svg'

function Card({ project }) {

  return (
    <div className='card-container'>
      <img className='card-image' src={project.image} alt='main image project'/>
      <p className='card-category'>{project.category}</p>
      
      <div className="title-wraper">
        <h3 className='card-title'>{project.title}</h3>
        <h3 className='card-tech'>{project.tech}</h3>
      </div>

      <div className="explore-wraper">
        <a className='card-explore' href={project.url}>explore project</a>
        <img className='card-icon' src={CardIcon} alt='icon explore project'/>
      </div>

    </div>
  )
}

export default Card
