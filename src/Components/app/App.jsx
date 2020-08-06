import React, {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";

import WeatherBox from "../weather-box";
import weatherData from "../../services/weather-test-data";
import { withWeatherService } from "../hoc";
import './App.css';



import { Container } from 'semantic-ui-react';


function App() {
    
  return (
    <Container fluid className="App">
      <WeatherBox {...weatherData}/>
    </Container>
  );
}

export default withWeatherService()(App)
