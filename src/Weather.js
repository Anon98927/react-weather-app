import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="container">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type in a City"
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>New York</h1>
      <ul>
        <li>Wednesday 07:00</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src="" alt="mostly cloudy" />
          40°F
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 20%</li>
            <li>Humidity: 50%</li>
            <li>Wind: 5 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
