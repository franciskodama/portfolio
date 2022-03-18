 import React from 'react'
 import { useState } from 'react'
 import '../styles/Projects.css'
 import Card from '../components/Card'
 import Pacman from '../assets/images/card-squared-pacman-blue.jpg'

 const Projects = () => {
  const [ projects, setProjects ] = useState(
    [
      { 
        id: 1,
        title: 'pac man',
        tech: 'html css js',
        category: 'video game',
        url: 'https://fkodama.com/pacman/',
        image: 'https://www.fkodama.com/_transfer/card-squared-pacman-purple.jpg',
      },
      { 
        id: 2,
        title: 'space invaders',
        tech: 'html css js',
        category: 'video game',
        url: 'https://fkodama.com/spaceinvaders/',
        image: 'https://www.fkodama.com/_transfer/card-squared-pacman-red.jpg',
      },
      { 
        id: 3,
        title: 'seletos',
        tech: 'html css js',
        category: 'website',
        url: 'https://fkodama.com/_dev/seletos',
        image: 'https://www.fkodama.com/_transfer/card-squared-pacman-blue.jpg'
      }    
    ] 
  )

  return (
     <section className='section section-projects' id='projects'>
         <div className='container'>
            <h2 className='title'>projects</h2>
            <div className="projects-inner-container">
            
            {projects.map((project) => (
                <Card key={project.id} project={project} />
            ))
          }

          </div>
        </div>
     </section>
   )
 }
 
 export default Projects
 