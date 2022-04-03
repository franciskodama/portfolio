 import React from 'react'
 import { useState } from 'react'
 import '../styles/Projects.css'
 import Card from '../components/Card'
 import { projects } from '../data/Data'

 const Projects = () => {
   
    return (
     <section className='section section--projects' id='projects'>
         <div className='container'>
            <h2 className='projects__title'>selected projects</h2>
            <div className="projects">
            
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
 
