import React from "react";
import FormatDate from "./FormatDate";
import Temperature from "./Temperature";
import WeatherForecast from "./WeatherForecast";
import WeatherIcon from "./WeatherIcon";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="main-info">
      <div>
        <br />
        <span className="currentcity" id="currentcity">
          {props.data.name}
        </span>
        <br />
        <FormatDate />

        <div className="weatherbox">
          <span className="weathericon">
            <WeatherIcon code={props.data.weather[0].icon} size={78} />
          </span>
          <Temperature celsius={props.data.main.temp} city={props.city} />
        </div>
      </div>

      <div>
        <ul className="discription">
          <li className="weatherdiscription" id="weatherdiscription">
            {props.data.weather[0].description}
          </li>
          <li>
            Humidity:
            <span id="humidityvalue"> {props.data.main.humidity}</span>
            <span> %</span>
          </li>
          <li>
            Wind:<span id="windvalue"> {props.data.wind.speed}</span>
            <span> km/h</span>
          </li>
        </ul>
        <hr />
        <WeatherForecast coordinates={props.data.coord} />
      </div>
    </div>
  );
}
