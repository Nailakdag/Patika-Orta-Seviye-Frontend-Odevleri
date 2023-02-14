import axios from "axios";
import { useEffect, useState } from "react";
import cities from "./Cities";
import "./app.css";
function App() {
  const [city, setCity] = useState("Adana");
  const cityIndex = cities.findIndex((e) => e.name === city);
  const lat = cities[cityIndex].latitude;
  const lon = cities[cityIndex].longitude;
  const [weather, setWeather] = useState([]);
  useEffect(() => {
    const axiosData = async () => {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=f5ceab07c3b9038351e5a55b06eb914d&units=metric`
      );
      setWeather(res.data.list);
    };
    axiosData();
  }, [lat, lon]);
  console.log(weather);

  return (
    <div className="content">
      <header>
        <h2>Weather App</h2>
      </header>

      <div className="select">
        <select
          name="city"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        >
          {cities.map((data) => {
            return <option key={data.id}>{data.name}</option>;
          })}
        </select>
      </div>

      {weather && (
        <div>
          {weather.map((data) => {
            return (
              <div style={{ borderBottom: "1px solid black" }}>
                <p>Time: {data.dt_txt}</p>
                <p>Degree: {data.main.temp} C</p>
                <p>{data.weather[0].description}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;
