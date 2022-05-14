import React from 'react';
import { useEffect, useState } from 'react';
import SearchLocation from './components/Input';
import axios from 'axios';
import './App.css';
import './index.css';

const key = process.env.REACT_APP_API_KEY;

function App() {
  const [text, textChange] = useState('');
  const [weatherData, setWeatherData] = useState([]);
  const [, setClicked] = useState(null);
  const [err, setErr] = useState(null);
  const { location, current } = weatherData;

  const handleText = (e) => {
    textChange(e.target.value);
  };
  const handleClick = () => {
    setClicked(fetchData);
  };

  const fetchData = async () => {
    if (setClicked && text !== '') {
      try {
        const { data } = await axios.get(
          `https://api.weatherapi.com/v1/forecast.json`,
          {
            params: {
              key: key,
              q: text,
              lang: 'en',
              days: '5',
            },
          }
        );
        setWeatherData(data);
      } catch (error) {
        setErr(error);
        alert(err.message);
      }
    }
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (setClicked) {
        fetchData();
      }
    }, 200);
    return () => {
      clearTimeout(timeOut);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setClicked]);

  return (
    <div className="App">
      <SearchLocation
        handleText={handleText}
        text={text}
        handleClick={handleClick}
      ></SearchLocation>
      <div
        style={location ? location : { display: 'none' }}
        key={location ? location.name : Math.random()}
        className="weatherCard"
      >
        <h1>{location ? ` ${location.country}` : undefined}</h1>
        <h1>{location ? ` ${location.name}` : undefined}</h1>
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
