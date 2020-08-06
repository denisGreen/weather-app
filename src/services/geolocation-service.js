import { useState, useEffect } from "react";
import {useDispatch} from 'react-redux';

import {
    locationRequested, 
    locationSuccses, 
    locationError
} from '../Actions' 




export const useGeolocation = ()=>{
    const dispatch = useDispatch();
    const [location, setlocation] = useState({latitude:"", longitude: ""});
    
    useEffect(()=>{

        const success=(position)=>{
            dispatch()
            //if geolocation aviable set location
            setlocation({
                latitude: position.coords.latitude, 
                longitude:position.coords.longitude
            })
            

        }
        const error = ()=>{
            throw new Error("location error");
        }

        if(!navigator.geolocation) {

            dispatch(locationError("No geolocation!"))
        } else {
          
          navigator.geolocation.getCurrentPosition(success, error);
        }

    }, []);
    return location;
    

}
