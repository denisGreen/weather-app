import  actionTypes from './action-types';
import actionCreator from './actions-creator';




//sync actions
export const weatherRequested = ()=> actionCreator(actionTypes.FETCH_REQUEST);
export const weatherSuccses = apiData=> actionCreator(actionTypes.FETCH_SUCCSES, apiData);
export const weatherError = error => actionCreator(actionTypes.FETCH_ERROR, error);
export const locationRequested = ()=> actionCreator(actionTypes.LOCATION_REQUEST);
export const locationSuccses = location => actionCreator(actionTypes.LOCATION_SUCCSES, location);
export const locationError = error => actionCreator(actionTypes.LOCATION_ERROR, error);


//async actions
export const getLocation = ()=> dispatch =>{
    dispatch(locationRequested());
    const success=(position)=>{
        dispatch(locationSuccses({
            latitude: position.coords.latitude, 
            longitude:position.coords.longitude
        }));
    }
    const error = ()=>{
        dispatch(locationError("location error"));
    }
    if(!navigator.geolocation) {

        dispatch(locationError("No geolocation!"));
    } else {
          
        navigator.geolocation.getCurrentPosition(success, error);
    }
}

export const fetchWeather = ()=>serviceLocation => dispatch => {
    const {service, location} = serviceLocation;
    dispatch(weatherRequested()); 
    console.log("fetchWeather", service, location, dispatch); 
    
    return (
        //fetching data from the server
        
        service.getWeather(location)
        
        //dispatching 'FETCH_SUCCSES' action to the Redux store
        .then(
          result => {
              
            dispatch(weatherSuccses(result.data));
          },
          //in case of error dispatch 'FETCH_ERROR'
          error => {
            dispatch(weatherError(error));
            throw new Error("server request error")
            
          }
        )
    );
  };
