import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import './index.css';
import SearchLocation from './components/Input';
import WeatherDetails from './components/WeatherDetails';
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
  const onSubmit = (e) => {
    e.preventDefault();
  };
  const fetchData = async () => {
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
    }, 2000);
    return () => {
      clearTimeout(timeOut);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return (
    <div className="App">
      <SearchLocation
        handleText={handleText}
        text={text}
        onSubmit={onSubmit}
      ></SearchLocation>
      <WeatherDetails></WeatherDetails>
    </div>
  );
}

export default App;
