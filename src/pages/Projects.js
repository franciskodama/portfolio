 import React from 'react'
 import { useState } from 'react'
 import '../styles/Projects.css'
 import Card from '../components/Card'

 const Projects = () => {
  const [ projects, setProjects ] = useState(
    [
      { 
        id: 1,
        title: 'this.portfolio',
        tech: '... + react',
        category: 'website',
        url: 'https://www.fkodama.com',
        image: require('../assets/images/card-squared-this.jpg')
      },
      {    
        id: 2,
        title: 'pac man',
        tech: 'html css js',
        category: 'video game',
        url: 'https://fkodama.com/pacman/',
        image: require('../assets/images/card-squared-pacman2.jpg')
      },
      { 
        id: 3,
        title: 'space invaders',
        tech: 'html css js',
        category: 'video game',
        url: 'https://fkodama.com/spaceinvaders/',
        image: require('../assets/images/card-squared-space.jpg'),
      },
      { 
        id: 4,
        title: 'seletos',
        tech: 'html css js',
        category: 'website',
        url: 'https://fkodama.com/_dev/seletos',
        image: require('../assets/images/card-squared-seletos.jpg')
      },
      { 
        id: 5,
        title: 'mundial',
        tech: 'html css',
        category: 'website',
        url: 'https://www.mundialcomunicacao.com.br/',
        image: require('../assets/images/card-squared-mundial.jpg')
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
 