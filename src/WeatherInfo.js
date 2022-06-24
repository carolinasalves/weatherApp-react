import React from "react";

import "./WeatherInfo.css";
import WeatherTemperature from "./WeatherTemperature";
import WeatherDescription from "./WeatherDescription";
import Wind from "./Wind";

export default function WeatherInfo() {
  return (
    <div>
      <WeatherTemperature max={23} min={17} />
      <WeatherDescription />
      <Wind speed={10} />
    </div>
  );
}
