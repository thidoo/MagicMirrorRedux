import React from 'react';
import { Provider } from 'react-redux';

import './AppContainer.css';

import configureStore from './store';
import WeatherForecastContainer from './Weather/WeatherForecastContainer';
import CurrentDateTimeContainer from './DateTime/CurrentDateTimeContainer';
import BitcoinPriceContainer from "./Bitcoin/BitcoinPriceContainer";

const store = configureStore();

class AppContainer extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <div className='App'>
          <CurrentDateTimeContainer/>
          <WeatherForecastContainer/>
          <BitcoinPriceContainer/>
        </div>
      </Provider>
    )
  }
}

export default AppContainer;