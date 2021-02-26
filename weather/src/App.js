import React, { useState } from "react";
import "./App.css";
import Form from "./Form";
import Weather from "./Weather";

const APIKEY = "4f40031c90bee253c559f5cbfa27719c";
//apikey found on openweather.org

function App() {
  const [weather, setWeather] = useState([]);

  async function fetchData(e) {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const apiData = await fetch (
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${APIKEY}`
    )
      .then((res) => res.json())
      .then((data) => data);
    if (city && country) {
      setWeather({
        data: apiData,
        city: apiData.name,
        country: apiData.sys.country,
        tempreture: Math.round(apiData.main.temp - 273.15),
        feels: Math.round(apiData.main.feels_like - 273.15),
        description: apiData.weather[0].description,
        error: "",
      });
    } else {
      setWeather({
        data: "",
        city: "",
        country: "",
        tempreture: "",
        feels: "",
        description: "",
        error: alert("Please enter valid City and Country"),
      });
    }
  }
  return (
    <div className="App">
      <h3>WEATHER APP</h3>
      <Form getWeather={fetchData} />
      <Weather
        city={weather.city}
        country={weather.country}
        tempreture={weather.tempreture}
        feels={weather.feels}
        description={weather.description}
      />
      {console.log(weather)}
    </div>
  );
}

export default App;
