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

                {/* <iframe src='https://my.spline.design/untitled-17e28cb4d2901c6066d30d6839b48b2b/' frameborder='0' width='100%' height='100%'></iframe> */}
            </div>
        </section>
    )
}

export default Hero