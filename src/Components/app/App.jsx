import React, {useEffect} from 'react';

import { Switch, Route } from "react-router-dom";

import WeatherBox from "../weather-box";
import weatherData from "../../services/weather-test-data";
import withWeatherService from "../hoc";
import Home from "../pages/home";
import './App.css';



import { Container } from 'semantic-ui-react';


function App() {
    
  return (
    <Container fluid className="App">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route render={() => <div>Page Not Found</div>} />
      </Switch>
    </Container>
  );
}

export default withWeatherService()(App);
