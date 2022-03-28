import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import '../styles/Api.css'

import Sun from '../assets/images/01d.png'


function Api() {

  const [ data, setData ] = useState({})
  const [ location, setLocation ] = useState('')
  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=56fa81e49104e23170bab6e9546dbc2e&units=metric`

  useEffect(() => {
    console.log('the use effect ran')
    Axios.get('https://api.openweathermap.org/data/2.5/weather?q=ottawa&appid=56fa81e49104e23170bab6e9546dbc2e&units=metric').then((response) => {
      setData(response.data)
      console.log(response.data.timezone)
      console.log(response.data.timezone)
    })
  }, [])

  const searchLocation = (event) => {
      if (event.key === 'Enter') {
      Axios.get(url).then((response) => {
        setData(response.data)
      })
    }
  }

  return (
    <div className='section-api-external'>
      <img className='icon-weather' src={data.weather ? require(`../assets/images/${data.weather[0].icon}.png`) : null} alt='weather condition'/>



      <section className='section section-api' id='api'>
          <div className='container'>

            <div className="api--grid">

              <div className="question-wrapper">              
                <h2 className="api--question">What city</h2>
                <h2 className="api--question">are you in?</h2>
                <input id='myInput' value={location} onChange={event => setLocation(event.target.value)} onKeyPress={searchLocation} placeholder='enter location' type='text'/>
              </div>

              <h4 className="api--title-city">Weather in</h4>
              <h3 className="api--city">{data.name}</h3>
              <h3 className="api--country">{data.sys ? <p className='api--country'>{data.sys.country}</p> : null}
              </h3>          
              
              <h4 className="api--log">Longitude {data.coord ? <p>{data.coord.lon}</p> : null}</h4>
              <h4 className="api--lat">Latitude {data.coord ? <p>{data.coord.lat}</p> : null}</h4>

              <h3 className='api--description'>{data.weather ? <p>{data.weather[0].description}</p> : null}</h3>

              <div className="feels-wrapper">
                <h4 className="api--title-others">Feels like</h4>
                <h3>{data.main ? <p className='data'>{Math.trunc(data.main.feels_like)}</p> : null}</h3>
              </div>
              <h5 className="feels-celsius">°C</h5>

              <div className="temp-wrapper">
                <h4 className="api--title-temp">Current weather</h4>
                <h3>{data.main ? <p className='temp'>{Math.trunc(data.main.temp)}°C</p> : null}</h3>
              </div>

              <div className="wind-wrapper">
                <h4 className="api--title-others">Wind</h4>
                <h3>{data.wind ? <p className='data'>{data.wind.speed}</p> : null}</h3>
                <h5 className="api--unit">km/h</h5>
              </div>

              <div className="pressure-wrapper">
                <h4 className="api--title-others">Pressure</h4>
                <h3>{data.main ? <p className='data'>{data.main.pressure}</p> : null}</h3>
                <h5 className="api--unit">kPa</h5>
              </div>

              <div className="humidity-wrapper">
                <h4 className="api--title-others">Humidity</h4>
                <h3>{data.main ? <p className='data'>{data.main.humidity}</p> : null}</h3>
                <h5 className="api--unit">%</h5>
              </div>

              <div className="visibility-wrapper">
                <h4 className="api--title-others">Visibility</h4>
                <p className='data'>{data.visibility}</p>
                <h5 className="api--unit">km</h5>
              </div>

              <div className="sunrise-wrapper">
                <h4 className="api--title-others">Sunrise</h4>
                <h3>{data.sys ? <p className='data'>{(new Date(data.sys.sunrise * 6000-(data.timezone * 1000)).toString()).slice(17,21)}</p> : null}</h3>
                <h5 className="api--unit">a.m.</h5>
              </div>

              <div className="sunset-wrapper">
                <h4 className="api--title-others">Sunset</h4>
                <h3>{data.sys ? <p className='data'>{(new Date(data.sys.sunrise * 6000-(data.timezone * 1000)).toString()).slice(17,21)}</p> : null}</h3>
                <h5 className="api--unit">p.m.</h5>
              </div>

              <div className="updated-wrapper">
                <h4 className="api--date">Updated on</h4>
                <h3 className='api--date'>{(new Date(data.dt * 1000-((data.timezone)*6000)).toString()).slice(4)}</h3>
              </div>

            </div>
          </div>
    </section> 
  </div>
  )
}

export default Api
