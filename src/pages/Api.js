import React, { useState } from 'react'
import Axios from 'axios'

import '../styles/Api.css'
import SunCloudRain from '../assets/images/sun-cloud-little-rain.png' 

function Api() {

  const [ data, setData ] = useState({})
  const [ location, setLocation ] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=aeb29e2e41400b27c2f8bbdbf478ac97`
  // const urlGetCity = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&&appid=aeb29e2e41400b27c2f8bbdbf478ac97`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      Axios.get(url).then((response) => {
        setData(response.data)
      })
      setLocation('')
    }
  }

  return (
    <div className='section-api-external'>
      <img className='weather-img' src={SunCloudRain} alt='weather condition' />
      <section className='section section-api' id='api'>
        <img className='weather-img' src={SunCloudRain} alt='weather condition' />
        <div className='inner-section'>
          <div className='container'>
            <h1 className='title-api'>API</h1>

              <input
                value={location}
                onChange={event => setLocation(event.target.value)}
                onKeyPress={searchLocation}
                placeholder='Enter location'
              type='text' />

              <p>{data.name}</p>

              <div>Temperature: {data.main ? <p>{data.main.temp}</p> : null}</div>
              <div>Feels like: {data.main ? <p>{data.main.feels_like}</p> : null}</div>

              <div>Weather: {data.weather ? <p>{data.weather[0].main}</p> : null}</div>

              <div>Wind: {data.wind ? <p>{data.wind.speed}</p> : null}</div>
          
          </div>
        </div>
    </section> 
  </div>
  )
}

export default Api
