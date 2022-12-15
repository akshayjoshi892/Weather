import React, { useState } from "react";
import axios from "axios";
import "./Display.css";
import "bootstrap/dist/css/bootstrap.css";
export default function Weather() {
   const [city, setCity] = useState("");
   const [data, setData] = useState({
      description: "",
      humidity: 0,
      pressure: 0,
      temp: 0,
      temp_max: 0,
      temp_min: 0,
      surise: 0,
      sunset: 0,
      country: "",
      time: "",
   });

   const handleClick = () => {
      // const url = "";
      axios
         .get(
            `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a272bdd7f82beaaa00590fb169575993`
         )
         .then((response) => {
            setData({
               description: response.data.weather[0].description,
               humidity: response.data.main.humidity,
               pressure: response.data.main.pressure,
               temp: response.data.main.temp,
               temp_max: response.data.main.temp_max,
               temp_min: response.data.main.temp_min,
               surise: response.data.sys.sunrise,
               sunset: response.data.sys.sunset,
               country: response.data.sys.country,
               time: response.data.timezone,
            });
         });
   };

   return (
      <>
         <div className="wrapper">
            <div className="top">
               <input
                  type="text"
                  className="w-75 int"
                  id=""
                  placeholder="Enter location"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
               ></input>
               <button className="button" onClick={handleClick}>
                  Search{" "}
               </button>
            </div>
            <div className="middle">
               <h3>
                  {(data.temp - 273.15).toFixed(2)}
                  <sup>o</sup>C
               </h3>
            </div>
            <div className="bottom">
               <div className="left">
                  <p>{"Country: " + data.country}</p>
                  <p>
                     {"Max Temp: " + (data.temp_max - 273.15).toFixed(2)}
                     <sup>o</sup>C
                  </p>
                  <p>{"Humidity: " + data.humidity}</p>
               </div>
               <div className="right">
                  <p>{"Pressure: " + data.pressure}</p>
                  <p>{"Sunset: " + data.sunset}</p>
                  <p>{"Sunrise: " + data.surise}</p>
               </div>
            </div>
         </div>
      </>
   );
}
