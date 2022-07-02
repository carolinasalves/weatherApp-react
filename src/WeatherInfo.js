import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <FormattedDate date={props.data.date} />
      <h1>{props.data.city}</h1>
      <h2>
        <span>
          <WeatherIcon code={props.data.icon} />
        </span>
        <span>
          <WeatherTemperature celsius={props.data.temperature} />
        </span>
      </h2>
      <div>
        <p>
          Max.: <span>{Math.round(props.data.max)}</span>º Min.:{" "}
          <span>{Math.round(props.data.min)}</span>º
        </p>
        <div className="text-capitalize">{props.data.description}</div>
        <div className="wind">
          Wind Speed: <span>{Math.round(props.data.wind)}</span> Km/h
        </div>
      </div>
    </div>
  );
}
