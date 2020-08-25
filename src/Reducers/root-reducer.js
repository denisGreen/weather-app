import actionTypes from '../Actions/action-types';

const innitialState = {
    isLoading: true,
    chek:true,
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
                ...state,
                isLoading: true
            }
        case actionTypes.FETCH_SUCCSES:
            
            return {
                
                ...state,
                isLoading: false,
                weatherData: action.payload,
                
            }
        case actionTypes.FETCH_ERROR:
            return{
                ...state,
                isLoading: false,
                requestError: action.payload
            }
        case actionTypes.LOCATION_SUCCSES:
            
            return {
                ...state,
                isLocated: true,
                location: action.payload
                
            }
        case actionTypes.LOCATION_ERROR:
            return{
                ...state,
                isLoading: false,
                locationError: action.payload
            }
        default:
            return state;
    }
}

export default rootReducer;