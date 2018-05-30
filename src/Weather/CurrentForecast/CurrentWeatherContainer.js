import React from 'react';
import { connect } from 'react-redux';

import {fetchCurrentWeatherData} from "./redux/actions";
import CurrentWeather from './CurrentWeather';

import WeatherService from '../Service/WeatherService';
import WeatherAPI from '../Service/WeatherAPI';
import DataConverter from '../Service/DataConverter';

const UPDATE_FREQUENCY = 60*1000; // every minute

class CurrentWeatherContainer extends React.Component{

  constructor(props) {
    super(props);
    this.weatherService = new WeatherService(new WeatherAPI(), new DataConverter());
  }

  componentDidMount(){
    this.props.getCurrentWeatherData(this.weatherService);

    this.timerID = setInterval(
      () => this.props.getCurrentWeatherData(this.weatherService),
      UPDATE_FREQUENCY
    );
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  render() {
    return <CurrentWeather value={this.props.currentWeather}/>
  }
}

function mapStateToProps(state) {
  return {
    currentWeather: state.updateCurrentWeather.currentWeather
  }
}

function mapDispatchToProps(dispatch){
  return {
    getCurrentWeatherData: (weatherService) => fetchCurrentWeatherData(weatherService)(dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentWeatherContainer);