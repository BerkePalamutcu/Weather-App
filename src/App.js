import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import './index.css';
import TextInput from './components/Input';

const KEY = '946cb26e574944edb81221535220604';

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const currentData = await axios.get(
        `https://api.weatherapi.com/v1/current.json`,
        {
          params: {
            key: KEY,
            q: 'kusadasi',
          },
        }
      );
      console.log(currentData.data);
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
