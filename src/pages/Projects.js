 import React from 'react'
 import { useState } from 'react'
 import '../styles/Projects.css'
 import Card from '../components/Card'

 const Projects = () => {
  const [ projects, setProjects ] = useState(
    [
      { 
        id: 1,
        icon: require('../assets/images/card-icon-thisportfolio.png'),
        titleA: '{this.Portfolio}',
        titleB: 'this.',
        titleC: 'Portfolio',
        tech: '... + react',
        category: 'website',
        url: 'https://www.fkodama.com',
        image: require('../assets/images/card-squared-this.jpg'),
        frontText: 'I am an experienced tech services entrepreneur/consultant product.',
        backText: '1001% React-based, it was the most important project I used to learn and display my skills in HTML, JSX, CSS, Javascript, and the React framework',
        backTextPurpose: '100% React-based, it was the most important project I used to learn and display my skills in HTML, JSX, CSS, Javascript, and the React framework',
        backTextTech: '100% React-based, it was the most important project I used to learn and display my skills in HTML, JSX, CSS, Javascript, and the React framework'
      },
      {    
        id: 2,
        icon: require('../assets/images/card-icon-pacman.png'),
        titleA: 'PAC MAN',
        titleB: 'game.',
        titleC: 'Pac Man',
        tech: 'html css js',
        category: 'video game',
        url: 'https://fkodama.com/pacman/',
        image: require('../assets/images/card-squared-pacman2.jpg'),
        frontText: 'I am an experienced tech services entrepreneur/consultant product.',
        backText: '100% React-based, it was the most important project I used to learn and display my skills in HTML, JSX, CSS, Javascript, and the React framework',
        backTextPurpose: '100% React-based, it was the most important project I used to learn and display my skills in HTML, JSX, CSS, Javascript, and the React framework',
        backTextTech: '100% React-based, it was the most important project I used to learn and display my skills in HTML, JSX, CSS, Javascript, and the React framework'
      },
      { 
        id: 3,
        icon: require('../assets/images/card-icon-spaceinvaders.png'),
        titleA: 'SPACE INVADERS',
        titleB: 'game.',
        titleC: 'Space Invaders',
        tech: 'html css js',
        category: 'video game',
        url: 'https://fkodama.com/spaceinvaders/',
        image: require('../assets/images/card-squared-space.jpg'),
        frontText: 'I am an experienced tech services entrepreneur/consultant product.',
        backText: '100% React-based, it was the most important project I used to learn and display my skills in HTML, JSX, CSS, Javascript, and the React framework',
        backTextPurpose: '100% React-based, it was the most important project I used to learn and display my skills in HTML, JSX, CSS, Javascript, and the React framework',
        backTextTech: '100% React-based, it was the most important project I used to learn and display my skills in HTML, JSX, CSS, Javascript, and the React framework'
      },
      { 
        id: 4,
        icon: require('../assets/images/card-icon-seletos.png'),
        titleA: 'SELETOS',
        titleB: 'website.',
        titleC: 'Seletos',
        tech: 'html css',
        category: 'website',
        url: 'https://fkodama.com/_dev/seletos',
        image: require('../assets/images/card-squared-seletos.jpg'),
        description: 'I am an experienced tech services entrepreneur/consultant product.',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five but also the leap into electronic remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      },
      { 
        id: 5,
        icon: require('../assets/images/card-icon-mundial.png'),
        titleA: 'MUNDIAL',
        titleB: 'website.',
        titleC: 'Mundial Comunicação Visual',
        tech: 'html css',
        category: 'website',
        url: 'https://www.mundialcomunicacao.com.br/',
        image: require('../assets/images/card-squared-mundial.jpg'),
        frontText: 'I am an experienced tech services entrepreneur/consultant product.',
        backText: '100% React-based, it was the most important project I used to learn and display my skills in HTML, JSX, CSS, Javascript, and the React framework',
        backTextPurpose: '100% React-based, it was the most important project I used to learn and display my skills in HTML, JSX, CSS, Javascript, and the React framework',
        backTextTech: '100% React-based, it was the most important project I used to learn and display my skills in HTML, JSX, CSS, Javascript, and the React framework'
      }    
    ] 
  )

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
 
