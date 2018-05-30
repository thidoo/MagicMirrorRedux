import React from 'react';

import CurrentWeatherContainer from './CurrentForecast/CurrentWeatherContainer';

import './WeatherForecastContainer.css';

class WeatherForecastContainer extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className='WeatherForecast'>
        <CurrentWeatherContainer/>
      </div>
    )
  }
}

export default WeatherForecastContainer;