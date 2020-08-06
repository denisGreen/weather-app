import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//import PropTypes from "prop-types";


import AnimatedIcon from "../animated-icon";
import { Grid, Container } from 'semantic-ui-react';
import ErrorIndicator from '../error-indicator';
import withWeatherService from "../hoc";

import { fetchWeather } from '../../Actions';

import './weather-box.css'


const WeatherBox = ({weatherService}) => {
    let service = new weatherService;

    //subscribing to the store
    const { weatherData, location, isLoading, isError, isLocated } = useSelector(state => state);
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    console.log("weatherBox", service, location, state);

    
    useEffect(() => {
        //getting geolocation

        if(isLocated){
            console.log("effect", service)
            //getting weather from the servers
            dispatch(fetchWeather(service, location, dispatch));
        };
        

    }, [isLocated]);

    if(isLoading) {
        return "Loading..."
    } else if (isError) {
        return <ErrorIndicator />;
    }else if(!isLocated){
        return(
            <div>Please allow the geolocation in the browser</div>
        )
    } else {
        let { list, city } = weatherData;
        let { main, weather, wind } = list[0];
        let { temp, humidity } = main;
        let { speed } = wind;
        let { country, name } = city;
        let { icon } = weather[0];   

    let dateTimeNow = new Date().toDateString();

        return (
            <Container className="weather-box">
                <Grid>
                    <Grid.Column className="weather-box-icon-box" floated="left" width={3}>
                        <AnimatedIcon icon={icon} />
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
}

WeatherBox.propTypes = {

}
export default withWeatherService()(WeatherBox);