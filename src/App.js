import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import './index.css';

const KEY = '946cb26e574944edb81221535220604';

function App() {
  const api = axios.create({
    baseURL: 'http://api.weatherapi.com/v1',
  });
  useEffect(() => {
    api.get(`/current.json?key=${KEY}&q=istanbul`);
  }, [api]);

  return <div className="App">BERKE</div>;
}

export default App;
