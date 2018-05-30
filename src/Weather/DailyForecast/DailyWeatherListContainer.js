import React from 'react';
import { connect } from 'react-redux';

import {fetchDailyWeatherForecast} from "./redux/actions";
import WeatherService from '../Service/WeatherService';
import HttpClient from '../Service/HttpClient';
import DataConverter from '../Service/DataConverter';
import DailyWeatherList from "./DailyWeatherList";

class DailyWeatherListContainer extends React.Component{

  constructor(props) {
    super(props);
    this.weatherService = new WeatherService(new HttpClient(), new DataConverter());
  }

  componentDidMount(){
    this.props.getDailyWeatherForecast(this.weatherService);
  }

  render() {
    return <DailyWeatherList value={this.props.dailyWeatherList}/>
  }
}

function mapStateToProps(state) {
  return {
    dailyWeatherList: state.updateDailyWeather.dailyWeatherList
  }
}

function mapDispatchToProps(dispatch){
  return {
    getDailyWeatherForecast: (weatherService) => fetchDailyWeatherForecast(weatherService)(dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DailyWeatherListContainer);