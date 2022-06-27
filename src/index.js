import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./WeatherApp.css";
import SearchForm from "./SearchForm";
import Date from "./Date";
import CurrentCity from "./CurrentCity";
import CurrentTemperature from "./CurrentTemperature";
import WeatherInfo from "./WeatherInfo";
import OpenSource from "./OpenSource";

function WeatherApp() {
  return (
    <div className="WeatherApp">
      <div className="container">
        <SearchForm />
        <Date />
        <CurrentCity />
        <CurrentTemperature />
        <WeatherInfo />
        <OpenSource />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<WeatherApp />, rootElement);
