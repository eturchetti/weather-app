import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';


import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from './../../constants/weathers'; 

const Weatherdata = () => (
    
    <div>
        <WeatherTemperature Temperature={20} WeatherState={CLOUD}/>
        <WeatherExtraInfo humidity={10000} wind={"10 m/s"} />
    </div>
    
);

export default Weatherdata;