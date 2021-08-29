import React from "react";
import ReactDOM from "react-dom";
import WeatherApp from "./WeatherApp";

import "./App.css";

function App() {
  return (
    <div className="App">
      <WeatherApp />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);