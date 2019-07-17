import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';

import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from './../../constants/weathers'; 

const icons = {
[CLOUD]: "cloud",
[CLOUDY]: "cloudy",
[SUN]: "day-sunny",
[RAIN]: "rain",
[SNOW]: "snow",
[WINDY]: "windy"
};

const getWeatherIcon = WeatherState => {
    
    const icon = icons[WeatherState];
    

    if (icon)
        return <WeatherIcons name={"cloud"} size="2x" />;
            else
     return <WeatherIcons name={"cloud"} size="2x" />;
}

const WeatherTemperature = ({Temperature, WeatherState}) => (
<div>
    
    <span>{`${Temperature} °C`} </span>
    <span>{`${WeatherState} +`} </span>
    </div>
);

WeatherTemperature.propTypes = {
    Temperature: PropTypes.number,
    WeatherState: PropTypes.string,
};

export default WeatherTemperature;