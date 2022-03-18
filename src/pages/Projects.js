 import React from 'react'
 import '../styles/Projects.css'
 import Card from '../components/Card'
 

 const projects = [
  { id: 1,
    title: 'pac man',
    tech: 'html, css, js',
    category: 'video game',
    url: 'https://fkodama.com/pacman/',
    image: 'https://media.giphy.com/media/ezoZeH4h2rg8tVqhyY/giphy.gif'
  },
  { 
    id: 2,
    title: 'space invaders',
    tech: 'html, css, js',
    category: 'video game',
    url: 'https://fkodama.com/spaceinvaders/',
    image: 'https://media.giphy.com/media/ezoZeH4h2rg8tVqhyY/giphy.gif'
  },
  { 
    id: 3,
    title: 'seletos',
    tech: 'html, css, js',
    category: 'website',
    url: 'https://fkodama.com/_dev/seletos',
    image: 'https://media.giphy.com/media/ezoZeH4h2rg8tVqhyY/giphy.gif'
  }    
] 

 function Projects() {
 
  return (
     <section className='section section-projects' id='projects'>
         <div className='container'>


              {projects.map((project) => (<h2 key={projects.id}>{projects.category}</h2>))}
              
              
              <div>----------------------</div>
              <Card />
        </div>
     </section>
   )
 }
 
 export default Projects
 