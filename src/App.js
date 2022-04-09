import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import './index.css';
import TextInput from './components/Input';

const key = process.env.REACT_APP_API_KEY;

function App() {
  const [weatherData, setWeatherData] = useState([]);
  useEffect(() => {
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
      console.log(data);
      console.log(weatherData);
      setWeatherData(data);
    };
    fetchData().catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <TextInput></TextInput>
    </div>
  );
}

export default App;
