import React from 'react';
import './App.css';
import './index.css';
import SearchLocation from './components/Input';
import axios from 'axios';
import { useState, useEffect } from 'react';

const App = () => {
  const key = process.env.REACT_APP_API_KEY;
  const [weatherData, setWeatherData] = useState([]);
  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.weatherapi.com/v1/current.json`,
      {
        params: {
          key: key,
          q: 'kusadasi',
          lang: 'tr',
        },
      }
    );
    setWeatherData(data);
  };

  useEffect(
    () => {
      try {
        fetchData();
      } catch (error) {
        console.log(error);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  return (
    <div className="App">
      <div>
        <SearchLocation weatherdata={weatherData}></SearchLocation>
      </div>
    </div>
  );
};

export default App;
