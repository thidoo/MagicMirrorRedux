import React from 'react';
import { connect } from 'react-redux';

import {fetchCurrentWeatherData} from "./actions";
import CurrentWeather from './CurrentWeather';

import WeatherService from '../Service/WeatherService';
import HttpClient from '../Service/HttpClient';
import DataConverter from '../Service/DataConverter';

class CurrentWeatherContainer extends React.Component{

  constructor(props) {
    super(props);

    this.weatherService = new WeatherService(new HttpClient(), new DataConverter());
  }

  componentDidMount(){
    this.props.getCurrentWeatherData(this.weatherService);
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