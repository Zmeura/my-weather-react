import React, { useEffect, useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");

  // useEffect(() => {
  //   setUnit("celsius");
  // }, [props.city]);

  function showFahrenheiht(event) {
    event.preventDefault();
    setUnit("fahrenheiht");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <span>
        <i className="currenttemperature" id="currenttemperature">
          {Math.round(props.celsius)}
        </i>
        <span className="metric">
          <i className="celsiuselement active">°C </i>
          <span className="slash">/</span>
          <i className="fahrenheitelement noactive" onClick={showFahrenheiht}>
            °F
          </i>
        </span>
      </span>
    );
  } else
    return (
      <span>
        <i className="currenttemperature" id="currenttemperature">
          {Math.round(props.celsius * (9 / 5) + 32)}
        </i>
        <span className="metric">
          <i className="celsiuselement noactive" onClick={showCelsius}>
            °C{" "}
          </i>
          <span className="slash">/</span>
          <i className="fahrenheitelement active">°F</i>
        </span>
      </span>
    );
}
