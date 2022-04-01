import React from 'react'
import Video from '../assets/images/hero-bg.mp4'
import '../styles/Hero.css'
import SpaceInvaders from '../components/SpaceInvaders'

const Hero = () => {
    

    return (
        <section className='section section--hero' id='hero'>
            <div className="filter">
                <video autoPlay loop muted
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '49em',
                        left: '50%',
                        top: 0,
                        objectFit: 'cover',
                        transform: 'translate(-50%, 0)',
                        zIndex: '-100'
                    }}
                >
                    <source src={Video} type='video/mp4'/>
                </video>
            </div>
            
            <div className='container'>
                
                <div className='hero-info'>
                        <p>Hi, I'm Francis Kodama.</p>
                    <div className='typing-effect'>
                        <h1 className='hightlight'>Front-end developer </h1>
                    </div>
                    <h2 className='highlight-special'>html, css, js, React,</h2>
                    <h2 className='hightlight' >GIT, npm, FIGMA.</h2>
                    <p>Based in Ottawa, ON - Canada.</p>
                </div>

                {/* <SpaceInvaders /> */}

            </div>
        </section>
    )
}

export default Hero

