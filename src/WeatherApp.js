import React from "react";
import "./Weather.css";
import ReactAnimatedWeather from 'react-animated-weather';

export default function Weather() {
  let weatherData = {
    city: "Los Angeles",
    temperature: 30,
    date: "Thursday 11:00",
    description: "Sunny",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 10
  };

  return (
    <div className="Weather">
      <form className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city.."
              className="form-control"
              autoComplete="off"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="form-control btn btn-warning shadow w-100"
            />
          </div>
        </div>
      </form>
      <div className="overview">
        <h1>{weatherData.city}</h1>
        <ul>
          <li>Last updated: {weatherData.date}</li>
          <li>{weatherData.description}</li>
          <li>Humidity: {weatherData.humidity}%</li>
          <li>Wind: {weatherData.wind} km/h</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img
              src={weatherData.imgUrl}
              alt={weatherData.description}
              className="float-left"
            />
            <div className="float-left">
              <strong>{weatherData.temperature}</strong>
              <span className="units">
                <a href="/">°C</a> | <a href="/">°F</a>
              </span>
            </div>
          </div>
          <div class="row">
              <div class="col-sm-2">
                  <div class="forecast-day">Tue</div>
                  <div class="forecast-icon">
                      <ReactAnimatedWeather icon="CLEAR_DAY" color="orange" size="30" animate={true}/>
                      </div>
                      <div class="forecast-temperature">20°</div></div>
                      <div class="col-sm-2">
                          <div class="forecast-day">Wed</div>
                          <div class="forecast-icon">
                              <ReactAnimatedWeather icon="CLEAR_DAY" color="orange" size="30" animate={true}/>
                              </div>
                              <div class="forecast-temperature">21°</div>
                              </div>
                              <div class="col-sm-2"><div class="forecast-day">Thu</div>
                              <div class="forecast-icon">
                                  <ReactAnimatedWeather icon="CLEAR_DAY" color="orange" size="30" animate={true}/>
                                  </div>
                                  <div class="forecast-temperature">20°</div>
                                  </div>
                                  <div class="col-sm-2">
                                      <div class="forecast-day">Fri</div>
                                      <div class="forecast-icon">
                                          <ReactAnimatedWeather icon="CLEAR_DAY" color="orange" size="30" animate={true}/>
                                          </div>
                                          <div class="forecast-temperature">20°</div>
                                          </div>
                                          <div class="col-sm-2">
                                              <div class="forecast-day">Sat</div>
                                              <div class="forecast-icon">
                                                  <ReactAnimatedWeather icon="CLEAR_DAY" color="orange" size="30" animate={true}/>
                                                  </div><div class="forecast-temperature">20°</div>
                                                  </div>
                                                  </div>
        </div>
      </div>
      <div className="Footer">
        <p className="footer">
          <a href="https://github.com/maJestic17/Weather-App-React-">
            Open-source code
          </a>{" "}
          by Daria Sukhacheva
        </p>
      </div>
    </div>
  );
}
