import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from "react-redux";

import WeatherBox from '../weather-box';
import {getLocation} from '../../Actions/index';


const NavigatorContainer = ({weatherService})=>{
//subscribing to the store
const {isLocated} = useSelector(state => state);
const dispatch = useDispatch();

useEffect(() => {
    if(!isLocated){
        //gettting geolocation
    dispatch(getLocation(dispatch));
    }
    
    
  }, []);

    return (
        <WeatherBox/>
    )
}

export default NavigatorContainer;