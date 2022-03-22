import React, { useEffect, useState } from 'react'
import Axios from 'axios'

import '../styles/Api.css'
import SunCloudRain from '../assets/images/sun-cloud-little-rain.png' 

function Api() {

  const [ data, setData ] = useState({})
  const [ location, setLocation ] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=56fa81e49104e23170bab6e9546dbc2e&units=metric`
  // const urlGetCountry = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=56fa81e49104e23170bab6e9546dbc2e`

  // useEffect(() => {
  //   setLocation('ottawa')
  //   Axios.get(url).then((response) => {
  //     setData(response.data)
  //   })
  // }, [])


  // const initiatePage = () => {
  //     Axios.get('https://api.openweathermap.org/data/2.5/weather?q=ottawa&appid=aeb29e2e41400b27c2f8bbdbf478ac97&units=metric').then((response) => {
  //       setData(response.data)
  //     })
  //     document.getElementById('myInput').value = ''
  //   console.log('hey')
  // }  


  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      Axios.get(url).then((response) => {
        setData(response.data)
      })
    }
  }

// Axios.get(urlGetCountry).then((response) => {
//   return console.log(response.data[3])
// })



  return (
    <div className='section-api-external'>
      <img className='weather-img' src={SunCloudRain} alt='weather condition' />
      <section className='section section-api' id='api'>
          <div className='container'>

            <div className="api--grid">

              <div className="question-wrapper">              
                <h2 className="api--question">What city</h2>
                <h2 className="api--question">are you in?</h2>
                <input id='myInput' value={location} onChange={event => setLocation(event.target.value)} onKeyPress={searchLocation} placeholder='enter location' type='text' />
              </div>

              <h4 className="api--title-city">Weather in</h4>
              <h3 className="api--city">{data.name}</h3>
              {/* <h3 className="api--city">{data.cod}</h3>           */}
              
              <h4 className="api--log">Longitude {data.coord ? <p>{data.coord.lon}</p> : null}</h4>
              <h4 className="api--lat">Latitude {data.coord ? <p>{data.coord.lat}</p> : null}</h4>

              <h3 className='api--description'>{data.weather ? <p>{data.weather[0].description}</p> : null}</h3>

              <div className="feels-wrapper">
                <h4 className="api--title-others">Feels like</h4>
                <h3>{data.main ? <p className='data'>{Math.trunc(data.main.feels_like)}</p> : null}</h3>
                <h5 className="api--unit">Celsius</h5>
              </div>

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
                <h3>{data.sys ? <p className='data'>{data.sys.sunrise}</p> : null}</h3>
                <h5 className="api--unit">a.m.</h5>
              </div>

              <div className="sunset-wrapper">
                <h4 className="api--title-others">Sunset</h4>
                <h3>{data.sys ? <p className='data'>{data.sys.sunset}</p> : null}</h3>
                <h5 className="api--unit">p.m.</h5>
              </div>

              <div className="updated-wrapper">
                <h4 className="api--date">Updated on</h4>
                <h3 className='api--date'>Sunday, 1:00 p.m.</h3>
              </div>

            </div>
          </div>
    </section> 
  </div>
  )
}

export default Api
