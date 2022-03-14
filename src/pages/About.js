import React from 'react'
import '../styles/About.css'
import Me from '../assets/images/about-me.png'
import LightBulb from '../assets/images/about-lightbulb.svg'
import Puzzle from '../assets/images/about-puzzle.svg'
import Robot from '../assets/images/about-robot.svg'
import Student from '../assets/images/about-student.svg'
import Eye from '../assets/images/about-eye.svg'
import Smile from '../assets/images/about-smile.svg'


import BagEmpty from '../assets/images/about-bag-empty.png'
import BagFull from '../assets/images/about-bag-full.png'



function About() {
  return (
    <section className='section section-about'>
        <div className="container">

          <div className="first-main-container">

            <div className="visa-tag">
              <p className="work-permit" >WORK PERMIT VALID</p>
              <p>to work in Canada</p>
            </div>
             
            <div className="first-inner-container">
              
              <div className="icons-container">
                <p className="icons-title">soft skills:</p>
                <img className="avatar-icon" src={LightBulb} alt="creative" />
                <img className="avatar-icon" src={Puzzle} alt="problem solving" />
                <img className="avatar-icon" src={Robot} alt="passionate for technology" />
                <img className="avatar-icon" src={Student} alt="constant learning" />
                <img className="avatar-icon" src={Eye} alt="detail oriented" />
                <img className="avatar-icon" src={Smile} alt="friendly" />
              </div>

              <div className="avatar-description-container">
                <img className="avatar-image" src={Me} alt="my avatar" />
                <div className="skills-container">
                  <h3 className="skills-title">creative</h3>
                  <p className="skills-description">I'm an experienced tech services entrepreneur/consultant - product designer oriented, with experience in product design, UX/UI.</p>
                </div>
              </div>

            </div>     

            <div className="square"></div>

          </div>

          <div className="second-main-container">
            <img className="bag-empty" src={BagEmpty} alt="Shop bag empty" />

            <div className="about-description">
              <h3 className="name">Francis Kodama</h3>
              <h2 className="job">Front-end Developer</h2>
              <h2 className="languages">HTML, CSS, JS, <span className="and">and</span> React.</h2>
              <p className="description-one">I'm an experienced tech services entrepreneur/consultant - product designer oriented, with experience in product design, UX/UI and business development.</p>
              <p className="description-two">Resourceful, curious, creative, and critical thinker, who loves to solve problems by designing enjoyable, usable and useful products.</p>
            </div>
            
            <div className="bottom-container">
              <div className="location-button-container">
                <p className="location-title">location:</p>
                <form className="location">
                  <input className="input-radio" type="radio" name="location" value="remote"/>
                  <label htmlFor="remote">Remote</label>
                  <input className="input-radio" type="radio" name="location" value="ottawa"/>
                  <label htmlFor="ottawa">Ottawa</label>
                  <input className="input-radio" type="radio" name="location" value="hybrid"/>
                  <label htmlFor="hybrid">Hybrid</label>
                </form>
                <button className="btn-add" type="submit">Add to my team</button>
              </div>

              <div className="tools">
                <p className="tools-title" >included:</p>
                <p>git</p>
                <p>agile</p>
                <p>jira</p>
                <p>figma</p>
                <p>adobe xd</p>
                <p>adobe photoshop</p>
                <p>adobe illustrator</p>
              </div>

            </div>



          </div>
    
    </div>
  </section>
  )
}

export default About
