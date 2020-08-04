import React from 'react';
import WeatherBox from "../weather-box";
import weatherData from "../../services/weather-test-data";
import './App.css';

import { Container } from 'semantic-ui-react';


function App() {
  return (
    <Container className="App">
      <WeatherBox {...weatherData}/>
    </Container>
  );
}

export default App;
