import React from "react";
import WeatherApp from "./WeatherApp";
import "./App.css";
import OpenSource from "./OpenSource";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <WeatherApp defaultCity="Lisbon" />
      </div>
      <footer>
        <OpenSource />
      </footer>
    </div>
  );
}
