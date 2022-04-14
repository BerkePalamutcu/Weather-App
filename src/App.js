import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import './index.css';
import SearchLocation from './components/Input';

import axios from 'axios';

const key = process.env.REACT_APP_API_KEY;
function App() {
  const [text, textChange] = useState('');
  const [weatherData, setWeatherData] = useState([]);
  const { location, current } = weatherData;

  const handleText = (e) => {
    e.preventDefault();
    textChange(e.target.value);
  };
  const fetchData = async () => {
    if (text) {
      const { data } = await axios.get(
        `https://api.weatherapi.com/v1/current.json`,
        {
          params: {
            key: key,
            q: text,
            lang: 'en',
          },
        }
      );
      setWeatherData(data);
    }
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (text !== '') {
        try {
          fetchData();
        } catch (error) {
          console.log(error);
        }
      }
    }, 5000);
    return () => {
      clearTimeout(timeOut);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, weatherData]);
  console.log(current);
  return (
    <div className="App">
      <SearchLocation handleText={handleText} text={text}></SearchLocation>
      <div key={Math.random()} className="weatherCard">
        <h1>{location ? `Country : ${location.country}` : undefined}</h1>
        <h1>{location ? `City Name: ${location.name}` : undefined}</h1>
        <hr></hr>
        <h1>{current ? `Current: ${current.temp_c} degrees` : undefined}</h1>
        <h1>
          {current ? `Feels like: ${current.feelslike_c} degrees` : undefined}
        </h1>
        <h1>{current ? `Condition: ${current.condition.text} ` : undefined}</h1>
        <h1>{current ? `Windspeed: ${current.wind_kph} Kph ` : undefined}</h1>
        <h1>{current ? `Wind direction: ${current.wind_dir} ` : undefined}</h1>
        <h1>{current ? `Humidity: %${current.humidity} ` : undefined}</h1>
        <h1>{current ? `Pressure: ${current.pressure_mb} Mb` : undefined}</h1>
        <h1>
          {current ? `Last update: ${current.last_updated} LT` : undefined}
        </h1>
      </div>
    </div>
  );
}

export default App;
