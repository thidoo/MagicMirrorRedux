import React from 'react';

import CurrentWeatherContainer from './CurrentForecast/CurrentWeatherContainer';

class WeatherForecastContainer extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <CurrentWeatherContainer/>
      </div>
    )
  }
}

export default WeatherForecastContainer;