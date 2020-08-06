import { useState} from "react";
import axios from "axios";



export const getWeather = (
  city,
  latitude,
  logitude,
  initialState = {}
) => {
  let requestResult = {}, 
      location = {};

  

    //check and set location parameter 
      if (!city){
        location =`lat=${latitude},lon=${logitude}`;
      }else{
          location =`q=${city}`;
      }
    console.log(`http://api.openweathermap.org/data/2.5/forecast?${location}&units=metric&appid=88825b9cf9f5b51d4196f9f181930ffd&lang=ua`)

    //request to the server
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?${location}&units=metric&appid=88825b9cf9f5b51d4196f9f181930ffd&lang=ua`
      )

      .then(
        result => {
          requestResult(result.data);
        },
        error => {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser 
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
          }
          console.log(error.config);
        }
      );


  return requestResult;
};