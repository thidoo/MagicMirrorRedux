import React from 'react';

import CurrentWeatherContainer from './CurrentForecast/CurrentWeatherContainer';

import './WeatherForecastContainer.css';
import DailyWeatherListContainer from "./DailyForecast/DailyWeatherListContainer";

class WeatherForecastContainer extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className='WeatherForecast'>
        <CurrentWeatherContainer/>
        <DailyWeatherListContainer/>
      </div>
    )
  }
}

export default WeatherForecastContainer;