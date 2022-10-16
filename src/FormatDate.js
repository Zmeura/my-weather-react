import React, { useState, useEffect } from "react";
import "./Weather.css";

export default function FormatDate() {
  let nowDate = new Date();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  //   let day = days[nowDate.getDay()];
  //   updateTime();
  //   function updateTime() {
  //     let hour = nowDate.getHours();
  //     if (hour < 10) {
  //       hour = `0${hour}`;
  //     }
  //     let minutes = nowDate.getMinutes();
  //     if (minutes < 10) {
  //       minutes = `0${minutes}`;
  //     }
  //     return `${day} ${hour}:${minutes}`;
  //   }
  // }

  const [time, setTime] = useState(new Date().toLocaleTimeString());
  let day = days[nowDate.getDay()];

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);

  return (
    <span className="dayofweekandtime" id="dayofweekandtime">
      {day} {time.split(":")[0]}:{time.split(":")[1]}
    </span>
  );
}
