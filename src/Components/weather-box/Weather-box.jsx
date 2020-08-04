import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';

const defaults = {
  icon: 'PARTLY_CLOUDY_DAY',
  color: 'goldenrod',
  size: 150,
  animate: true
};


const WeatherBox = ({name, weather,main, wind, sys})=>{
    let {temp} = main;
    let {country} = sys;
    
    return(
        <div className="weather-box">
            <ReactAnimatedWeather
    icon={defaults.icon}
    color={defaults.color}
    size={defaults.size}
    animate={defaults.animate}
  />
            <p className="city">{name}</p>
            <p className="country">{country}</p>
            <p className="temperature">{temp}</p>
        </div>
    )
}

export default WeatherBox;