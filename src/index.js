
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import store from './store';

import './index.css';
import 'semantic-ui-css/semantic.min.css'

import App from './Components/app';
import ErrorBoundry from './Components/error-boundry';
import weatherService from "./services/weather-service";
import { WeatherServiceProvider } from "./Components/weather-service-context";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundry>
        <WeatherServiceProvider value={weatherService}>
          <Router>
            <App />
          </Router>
        </WeatherServiceProvider>
      </ErrorBoundry>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
