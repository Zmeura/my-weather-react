import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [ready, setReady] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setReady(true);
  }

  useEffect(() => {
    setReady(false);
  }, [props.coordinates]);

  if (ready) {
    return (
      <div className="weatherForecast">
        <ul className="forecastList">
          <li>
            <WeatherForecastDay forecast={forecast[1]} />
          </li>
          <li>
            <WeatherForecastDay forecast={forecast[2]} />
          </li>
          <li>
            <WeatherForecastDay forecast={forecast[3]} />
          </li>
          <li>
            <WeatherForecastDay forecast={forecast[4]} />
          </li>
          <li>
            <WeatherForecastDay forecast={forecast[5]} />
          </li>
          <li>
            <WeatherForecastDay forecast={forecast[6]} />
          </li>
        </ul>
      </div>
    );
  } else {
    let apiKey = "95d7d2d06b9ed1ae1ccca7fcd6a50893";
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
