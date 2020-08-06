import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';

//default settings for the ReactAnimatedWeather component
const defaults = {
    icon: 'CLEAR_DAY',
    color: 'white',
    size: 150,
    animate: true
  };

//convertor from the openweather icon codes to the React Animated Weather 
const convertIcon =(iconCode)=> {
  console.log(iconCode==="1n", "iconCode", typeof(iconCode))
    switch(iconCode){
      case "01d":
        return "CLEAR_DAY";
      case "01n":
        return "CLEAR_NIGHT";
      case "02d":
      case "04d":
        return "PARTLY_CLOUDY_DAY";
      case "02n":
      case "04n":
        return "PARTLY_CLOUDY_NIGHT";
      case "03d":
      case "03n":
        return "CLOUDY";
      case "09d":
      case "09n":
      case "10d":
      case "11d":
      case "11n":
        return "RAIN";
      case "13d":
      case "13n":
        return "SNOW";
      case "50d":
      case "50n":
        return "FOG";    
      default:
        console.log("default")
        return "CLEAR_DAY"
    }
  }
  

  export default function AnimatedIcon({icon}){
    let animatedIcon = convertIcon(icon);
    console.log(icon);
    return (
        <ReactAnimatedWeather
                        icon={animatedIcon ? animatedIcon : defaults.icon}
                        color={defaults.color}
                        size={defaults.size}
                        animate={defaults.animate}
                    />
    )
  }