import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./WeatherApp.css";
import SearchForm from "./SearchForm";
import FormattedDate from "./FormattedDate";
import OpenSource from "./OpenSource";

function WeatherApp() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      min: response.data.main.temp_min,
      max: response.data.main.temp_max,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="WeatherApp">
        <div className="container">
          <SearchForm />
          <FormattedDate date={weatherData.date} />
          <h1>{weatherData.city}</h1>
          <h2>
            <span>☁️</span>
            <span>{Math.round(weatherData.temperature)}</span>
            <span className="units m-2">°C</span>
          </h2>
          <div>
            <p>
              Max.: <span>{Math.round(weatherData.max)}</span>º Min.:{" "}
              <span>{Math.round(weatherData.min)}</span>º
            </p>
            <div className="text-capitalize">{weatherData.description}</div>
            <div className="wind">
              Wind Speed: <span>{Math.round(weatherData.wind)}</span> Km/h
            </div>
          </div>
          <footer>
            <OpenSource />
          </footer>
        </div>
      </div>
    );
  } else {
    let city = "Sydney";
    let apiKey = "279a25be12063525a7c8e884a61525b9";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);

    return "Loading...";
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<WeatherApp />, rootElement);
