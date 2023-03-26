import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div classname="container">
        <Weather />
        <footer>
          The project is created by Michelle and is{" "}
          <a
            href="https://github.com/Anon98927/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
