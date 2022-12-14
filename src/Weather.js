import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Weather.css";
import { RotatingLines } from "react-loader-spinner";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [cityInfo, setCityInfo] = useState("");
  const [city, setCity] = useState(props.city);
  const [value, setValue] = useState("");

  let apiKey = "95d7d2d06b9ed1ae1ccca7fcd6a50893";
  let units = "metric";

  function showWeather(response) {
    setCityInfo(response.data);
    setReady(true);
  }

  function search() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(showWeather);
  }

  function showCurrenLocation() {
    navigator.geolocation.getCurrentPosition(searchPosition);
  }

  function searchPosition(position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    let apiUrlPosition = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=${units}&appid=${apiKey}`;
    axios.get(apiUrlPosition).then(showWeather);
  }

  function handleOnSubmit(event) {
    setCity(value);
    event.preventDefault();
    setValue("");
  }

  useEffect(() => {
    search();
  }, [city]);

  if (ready) {
    return (
      <div>
        <div className="box">
          <div className="Cities">
            <span
              className="Col"
              id={"kyiv"}
              onClick={(event) => setCity(event.currentTarget.id)}
            >
              Kyiv
            </span>
            <span
              className="Col"
              id={"odesa"}
              onClick={(event) => setCity(event.currentTarget.id)}
            >
              Odesa
            </span>
            <span
              className="Col"
              id={"lviv"}
              onClick={(event) => setCity(event.currentTarget.id)}
            >
              Lviv
            </span>
            <span
              className="Col"
              id={"kharkiv"}
              onClick={(event) => setCity(event.currentTarget.id)}
            >
              Kharkiv
            </span>
            <span
              className="Col"
              id={"dnipro"}
              onClick={(event) => setCity(event.currentTarget.id)}
            >
              Dnipro
            </span>
          </div>

          <div className="SearchingForm">
            <form onSubmit={handleOnSubmit}>
              <input
                type="text"
                placeholder="Enter a city..."
                className="input"
                id="input"
                autoComplete="off"
                value={value}
                onChange={(event) => setValue(event.currentTarget.value)}
                onSubmit={handleOnSubmit}
              />

              <input type="submit" className="search button" value="SEARCH" />
              <input
                type="button"
                className="current button"
                id="currentbutton"
                value="CURRENT"
                onClick={showCurrenLocation}
              />
            </form>
          </div>

          <div>
            <WeatherInfo data={cityInfo} city={city} />
          </div>
        </div>
        <footer>
          <div className="buildby">
            This project was coded by{" "}
            <a
              href="https://www.linkedin.com/in/alina-ivanova-3b3729243/"
              target="_blank"
              rel="noopener noreferrer"
              className="sourcelink"
            >
              <strong> Alina Ivanova</strong>
            </a>{" "}
            and it is{" "}
            <a
              href="https://github.com/Zmeura/my-weather-react"
              target="_blank"
              rel="noopener noreferrer"
              className="sourcelink"
            >
              <strong>open-sourced</strong>
            </a>{" "}
            on GitHub
          </div>
        </footer>
      </div>
    );
  } else {
    search();

    return (
      <div>
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      </div>
    );
  }
}
