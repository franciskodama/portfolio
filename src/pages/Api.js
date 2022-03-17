import React from 'react'
import '../styles/Api.css'
import SunCloudRain from '../assets/images/sun-cloud-little-rain.png' 

function Api() {
  return (
    <section className='section section-api'>
            <img className='weather-img' src={SunCloudRain} alt='weather condition' />
        <div className='inner-section'>
        <div className='container'>
            <h1 className='title-api'>API</h1>


        </div>
        </div>
    </section> 
  )
}

export default Api
