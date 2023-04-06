import React from "react";
import WeatherIcon from "./WeatherIcon.js";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {}

  let apiKey = "7e977d5c64e3857ddc3fd8233d003772";
  let longitude = props.coord.longitude;
  let latitude = props.coord.latitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&${apiKey}&units=imperial`;

  axios.get(apiUrl).then(handleResponse);

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
