import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../styles/Api.css";
import WhyCard from "../components/WhyCard";
import { whyData } from "../data/Data";
import { Parallax } from "react-scroll-parallax";

const Api = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=56fa81e49104e23170bab6e9546dbc2e&units=metric`;

  useEffect(() => {
    Axios.get(
      "https://api.openweathermap.org/data/2.5/weather?q=ottawa&appid=56fa81e49104e23170bab6e9546dbc2e&units=metric"
    ).then((response) => {
      setData(response.data);
    });
  }, []);

  const searchLocation = (e) => {
    if (e.key === "Enter") {
      document.getElementById("api__error").style.display = "none";
      Axios.get(url)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          if (error.response) {
            document.getElementById("api__error").style.display = "block";
          }
        });
    }
  };

  return (
    <div className="api-external">
      <img
        className="api-external__image"
        src={
          data.weather
            ? require(`../assets/images/${data.weather[0].icon}.png`)
            : null
        }
        alt="weather condition"
      />
      <section className="section api" id="api">
        <div className="container">
          <div className="api__grid">
            <div className="api__question">
              <h2>What city</h2>
              <h2>are you in?</h2>
              <input
                className="api__input"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                onKeyPress={searchLocation}
                placeholder="enter location"
                type="text"
              />
            </div>
            <p id="api__error">...Ops, city not found. Try again! :)</p>
            <h4 className="api__location-title">Weather in</h4>
            <h3 className="api__city">{data.name}</h3>
            {data.sys ? (
              <h3 className="api__country">{data.sys.country}</h3>
            ) : null}

            <h4 className="api__log">
              Longitude {data.coord ? <p>{data.coord.lon}</p> : null}
            </h4>
            <h4 className="api__lat">
              Latitude {data.coord ? <p>{data.coord.lat}</p> : null}
            </h4>
            {/* =============== SECOND SIDE =============== */}

            <h3 className="api__description">
              {data.weather ? <p>{data.weather[0].description}</p> : null}
            </h3>

            <div className="api__feels-wrapper">
              <h4 className="api__feels-title">Feels like</h4>
              <h3>
                {data.main ? (
                  <p className="data-feels">
                    {Math.trunc(data.main.feels_like)}
                  </p>
                ) : null}
              </h3>
            </div>
            <h5 className="api__feels-c">°C</h5>

            <div className="api__temp-wrapper">
              <h4 className="api__temp-title">Current weather</h4>
              <h3>
                {data.main ? (
                  <p className="api__temp">{Math.trunc(data.main.temp)}°C</p>
                ) : null}
              </h3>
            </div>
            <div className="api__wind-wrapper">
              <h4 className="api__others-title">Wind</h4>
              <h3>
                {data.wind ? <p className="data">{data.wind.speed}</p> : null}
              </h3>
              <h5 className="api__unit">km/h</h5>
            </div>

            <div className="api__pressure-wrapper">
              <h4 className="api__others-title">Pressure</h4>
              <h3>
                {data.main ? (
                  <p className="data">{data.main.pressure}</p>
                ) : null}
              </h3>
              <h5 className="api__unit">kPa</h5>
            </div>

            <div className="api__humidity-wrapper">
              <h4 className="api__others-title">Humidity</h4>
              <h3>
                {data.main ? (
                  <p className="data">{data.main.humidity}</p>
                ) : null}
              </h3>
              <h5 className="api__unit">%</h5>
            </div>

            <div className="api__visibility-wrapper">
              <h4 className="api__others-title">Visibility</h4>
              <p className="data">{data.visibility}</p>
              <h5 className="api__unit">km</h5>
            </div>

            <div className="api__sunrise-wrapper">
              <h4 className="api__others-title">Sunrise</h4>
              <h3>
                {data.sys ? (
                  <p className="data">
                    {new Date(data.sys.sunrise * 6000 - data.timezone * 1000)
                      .toString()
                      .slice(17, 21)}
                  </p>
                ) : null}
              </h3>
              <h5 className="api__unit">a.m.</h5>
            </div>

            <div className="api__sunset-wrapper">
              <h4 className="api__others-title">Sunset</h4>
              <h3>
                {data.sys ? (
                  <p className="data">
                    {new Date(data.sys.sunrise * 6000 - data.timezone * 1000)
                      .toString()
                      .slice(17, 21)}
                  </p>
                ) : null}
              </h3>
              <h5 className="api__unit">p.m.</h5>
            </div>

            <div className="api__updated-wrapper">
              <h4 className="api__date">Updated on</h4>
              <h3 className="api__date">
                {new Date(data.dt * 1000 - data.timezone * 6000)
                  .toString()
                  .slice(4)}
              </h3>
            </div>
          </div>
        </div>

        <WhyCard
          titleOne={whyData.api.titleOne}
          textOne={whyData.api.textOne}
          titleTwo={whyData.api.titleTwo}
          textTwo={whyData.api.textTwo}
          titleThree={whyData.api.titleThree}
          textThree={whyData.api.textThree}
          titleFour={whyData.api.titleFour}
          textFour={whyData.api.textFour}
          observation={whyData.api.observation}
          bottom={whyData.api.bottom}
          left={whyData.api.left}
        />
      </section>
    </div>
  );
};

export default Api;
