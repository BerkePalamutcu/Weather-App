import React, { useState, useEffect } from 'react';
import axios from 'axios';

const key = process.env.REACT_APP_API_KEY;

function SearchLocation() {
  const [text, textChange] = useState('');
  const handleText = (e) => {
    textChange(e.target.value);
  };
  console.log(text);
  const [weatherData, setWeatherData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://api.weatherapi.com/v1/current.json`,
        {
          params: {
            key: key,
            q: text,
            lang: 'tr',
          },
        }
      );

      console.log(weatherData);
      setWeatherData(data);
      console.log(weatherData);
    };
    fetchData().catch((error) => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);
  return (
    <div>
      <form>
        <input
          onChange={handleText}
          className="locationInput"
          type="text"
          value={text}
          required
        ></input>
      </form>
    </div>
  );
}
export default SearchLocation;
