import {useDispatch} from 'react-redux';
import  actionTypes from './action-types';
import actionCreator from './actions-creator';
import { getWeather } from '../services/weather-service';


//sync actions
export const weatherRequested = ()=> actionCreator(actionTypes.FETCH_REQUEST);
export const weatherSuccses = apiData=> actionCreator(actionTypes.FETCH_SUCCSES);
export const weatherError = error => actionCreator(actionTypes.FETCH_ERROR);
export const locationRequested = ()=> actionCreator(actionTypes.FETCH_REQUEST);
export const locationSuccses = location => actionCreator(actionTypes.FETCH_SUCCSES);
export const locationError = error => actionCreator(actionTypes.FETCH_ERROR);


//async actions


export const fetchWeather = async(dispatch, location) => {
    dispatch(weatherRequested());

    
    //fetching data from the server
    
    return (
       
        getWeather(location)
        
        //dispatching 'FETCH_SUCCSES' action to the Redux store
        .then(
          result => {
            dispatch(weatherSuccses(result));
          },
          //in case of error dispatch 'FETCH_ERROR'
          error => {
            dispatch(weatherError(error));
            throw new Error("server request error")
            
          }
        )
    );
  };
