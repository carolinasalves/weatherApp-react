import React from "react";

export default function WeatherTemperature(props) {
  return (
    <p>
      Max.: <span>{props.max}</span>º Min.: <span>{props.min}</span>º
    </p>
  );
}
