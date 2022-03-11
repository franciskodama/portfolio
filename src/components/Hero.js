import React from 'react'
import '../styles/Hero.css'
import '../App.css'

const Hero = () => {
    return (
        <section className="section section-hero">
            <div className="container">
                <div className="hero-info">
                    <p>Hi, I'm Francis Kodama.</p>
                    <h1 className="hightlight">Front-end developer </h1>
                    <h2 className="highlight-special">html, css, js, React,</h2>
                    <h2 className="hightlight" >GIT, npm, FIGMA.</h2>
                    <p>Based in Ottawa, ON - Canada.</p>
                </div>                   
            </div>
        </section>
    )
}

export default Hero