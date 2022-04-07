import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import './index.css';
import TextInput from './components/Input';

const KEY = '946cb26e574944edb81221535220604';
const weatherData = [];
const locationData = [];

function App() {
  const api = axios.create({
    baseURL: 'http://api.weatherapi.com/v1',
  });
  useEffect(() => {
    const fetchData = async () => {
      const currentData = await api.get(`/current.json?key=${KEY}&q=kusadasi`);
      console.log(currentData.data);
    };
    fetchData().catch((error) => console.log(error));
  }, [api]);

  return (
    <div className="App">
      <TextInput></TextInput>
    </div>
  );
}

export default App;
