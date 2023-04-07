import hotBg from "./assets/sunny.jpg";
import snowBg from "./assets/snow.jpg";
import rainBg from "./assets/rainny.jpg";
import Descriptions from "./components/Descriptions";
import { useEffect, useState } from "react";
import { getFormattedWeatherData } from "./weatherService";

function App() {
  const [city, setCity] = useState("Kraków");
  const [weather, setWeather] = useState(null);
  const [bg, setBg] = useState(hotBg);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData(city);
      setWeather(data);

      // const threshold = units ? 20 : 60;
      if (data.temp <= 15) setBg(snowBg);
      if (data.weather == "Rain") setBg(rainBg);
    };
    fetchWeatherData();
  });

  const enterKeyPressed = (e) => {
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value);
      e.currentTarget.blur();
    }
  };
  return (
    <div className="app" style={{ backgroundImage: `url(${bg})` }}>
      <div className="overlay">
        {weather && (
          <div className="container">
            <div className="section section_inputs">
              <input
                onKeyDown={enterKeyPressed}
                type="text"
                name="city"
                placeholder="Enter City Name"
              />
              <button>°C</button>
            </div>
            <div className="section section_temperature">
              <div className="icon">
                <h3>{`${weather.name},${weather.country}`}</h3>
                <img src={weather.iconURL} alt="weathericon" />
                <h3>{weather.description}</h3>
              </div>
              <div className="temperature">
                <h1>{`${weather.temp.toFixed()}`} °C</h1>
              </div>
            </div>
            {/* bottom desc */}
            <Descriptions weather={weather} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

//api:
