import actionTypes from '../Actions/action-types';

const innitialState = {
    isLoading: true,
    isError: false,
    isLocated: false,
    requestError:"",
    locationError: "",
    location: "",
    weatherData: {},
}

const rootReducer = (state = innitialState, action)=>{
    switch(action.type){
        case actionTypes.FETCH_REQUEST:
            return {
                isLoading: true,
                ...state
            }
        case actionTypes.FETCH_SUCCSES:
            return {
                isLoading: false,
                ...state,
                weatherData: action.payload,
            }
        case actionTypes.FETCH_ERROR:
            return{
                isLoading: false,
                requestError: action.payload,
                ...state
            }
        case actionTypes.LOCATION_SUCCSES:
            console.log(actionTypes.LOCATION_SUCCSES, action.payload)
            return {
                ...state,
                isLocated: true,
                location: action.payload
                
            }
        case actionTypes.LOCATION_ERROR:
            return{
                isLoading: false,
                locationError: action.payload,
                ...state
            }
        default:
            return state;
    }
}

export default rootReducer;