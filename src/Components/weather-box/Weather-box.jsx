import React, { useEffect} from "react";
//import PropTypes from "prop-types";
import AnimatedIcon from "../animated-icon";
import { Grid, Container } from 'semantic-ui-react';

import './weather-box.css'





const WeatherBox = ({list, city})=>{
    let {main, weather, wind} = list[0];
    let {temp, humidity} = main;
    let {speed} = wind;
    let {country, name} = city;
    let {icon} = weather[0];
    
    let dateTimeNow = new Date().toDateString();

    useEffect(() => {
        //getting geolocation

        //getting weather from the server
        
       // dispatch(fetchWeather(useGeolocation()));
        
    }, []);
    
    
    return(
        <Container className="weather-box">
            <Grid>
                <Grid.Column className="weather-box-icon-box" floated="left" width={3}>
                    <AnimatedIcon icon={icon}/>
                </Grid.Column>
                <Grid.Column className="weather-box-text" width={3} >
                    <p className="temperature">{temp} C</p>
                </Grid.Column>
                <Grid.Column className="weather-box-text" floated="right" width={5}>
                    <p className="humidity">Humidity: {humidity} %</p>
                    <p className="speed">Wind Speed: {speed} m/s</p>
                </Grid.Column>
                <Grid.Column className="weather-box-text" floated="right" width={5}>
                    <p className="city">{name}, {country}</p>
                    <p className="date-time-now">{dateTimeNow}</p>
            </Grid.Column>
            </Grid>
            <Grid.Row>
                <Grid.Column width={16}>
                    
                </Grid.Column>
            </Grid.Row>
        </Container>
    )
}

WeatherBox.propTypes ={

}
export default WeatherBox;