import React from "react";

import "./CurrentTemperature.css";

export default function CurrentTemperature() {
  return (
    <h2>
      <span>☁️</span>
      <span>19</span>
      <span className="units m-2">°C</span>
    </h2>
  );
}
