import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Hangu",
    feelsLike: 23.5,
    temp: 24.4,
    tempMin: 24.4,
    tempMax: 23.4,
    humidity: 47,
    weather: "Haze",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather App By Junaid Boghdadi</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}

export default WeatherApp;
