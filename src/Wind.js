import React from "react";

export default function Wind(props) {
  return (
    <div className="wind">
      Wind Speed: <span>{props.speed}</span> Km/h
    </div>
  );
}
