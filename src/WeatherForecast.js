import React from "react";
import WeatherIcon from "./WeatherIcon.js";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          Thu <WeatherIcon /> 19 10
        </div>
      </div>
    </div>
  );
}
