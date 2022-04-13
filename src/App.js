import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import './index.css';
import SearchLocation from './components/Input';
import axios from 'axios';

function App() {
  const key = process.env.REACT_APP_API_KEY;
  const [text, textChange] = useState('');
  const [weatherData, setWeatherData] = useState([]);

  const handleText = (e) => {
    textChange(e.target.value);
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
  console.log(weatherData);
  return (
    <div className="App">
      <SearchLocation handleText={handleText} text={text}></SearchLocation>
    </div>
  );
}

export default App;
