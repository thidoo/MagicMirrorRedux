import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './store';
import WeatherForecastContainer from './Weather/WeatherForecastContainer';

const store = configureStore();

class AppContainer extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <WeatherForecastContainer/>
      </Provider>
    )
  }
}

export default AppContainer;