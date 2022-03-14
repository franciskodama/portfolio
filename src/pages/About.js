import React from 'react'
import '../styles/About.css'

import BagEmpty from '../assets/images/about-bag-empty.png'
import BagFull from '../assets/images/about-bag-full.png'
import Avatar from '../components/Avatar'

function About() {
  return (
    <section className='section section-about'>
        <div className="container">

          <div className="first-main-container">

            <div className="visa-tag">
              <p className="work-permit" >WORK PERMIT VALID</p>
              <p>to work in Canada</p>
            </div> 
            
            <Avatar />

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
