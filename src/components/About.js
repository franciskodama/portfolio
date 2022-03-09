import React from 'react'
import '../styles/About.css'
import Me from '../assets/images/about-me.png'
import BagEmpty from '../assets/images/about-bag-empty.png'
import BagFull from '../assets/images/about-bag-full.png'



function About() {
  return (
    <div className='section section-about'>
        <div className="container">

          <div className="about-left">
            <img className="img-me" src={Me} alt="my avatar" />         
          </div>      

          <div className="about-right">
            <img className="bag-empty" src={BagEmpty} alt="Shop bag empty" />
            
            <div className="about-desc">
              <h3 className="name">Francis Kodama</h3>
              <h2>Front-end Developer</h2>
              <h2 className="languages">HTML, CSS, JS, and React</h2>
              <p className="description-one">I'm an experienced tech services entrepreneur/consultant - product designer oriented, with experience in product design, UX/UI and business development.</p>
              <p className="description-two">Resourceful, curious, creative, and critical thinker, who loves to solve problems by designing enjoyable, usable and useful products.</p>
            </div>
            
            <div className="location">
              <p className="location-title">Location:</p>
              <select name="location" >Choose location
                <option value="REMOTE">REMOTE</option>
                <option value="Ottawa">Ottawa</option>
              </select>
            </div>
            
            <button className="btn-add" type="submit">Add to my team</button>
          </div>
        </div>
    </div>
  )
}

export default About
