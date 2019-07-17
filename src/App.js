import React from 'react';
import './App.css';
import WeatherLocation from './components/WeatherLocation/Index';
import Location from './components/WeatherLocation/Location';
import Weatherdata from './components/WeatherLocation/WeatherData';


function App() {
  return (
    <div className="App">
      <WeatherLocation></WeatherLocation>
     </div>
  );
}

export default App;
