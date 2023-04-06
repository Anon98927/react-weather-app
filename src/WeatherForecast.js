import React from "react";
import WeatherIcon from "./WeatherIcon.js";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="Forecast-day">Thu</div>
          <WeatherIcon code="01d" size={36} />
          <div className="Forecast-temp">
            <span className="Forecast-max"></span>19°F |
            <span className="Forecast-min"> 10°F</span>
          </div>
        </div>
      </div>
    </div>
  );
}
