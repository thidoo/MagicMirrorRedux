import React from "react";
import { connect } from "react-redux";

import { fetchDailyWeatherForecast } from "./redux/actions";
import WeatherService from "../Service/WeatherService";
import WeatherAPI from "../Service/WeatherAPI";
import HttpClient from "../../common/HttpClient";
import DataConverter from "../Service/DataConverter";
import DailyWeatherList from "./DailyWeatherList";

const UPDATE_FREQUENCY = 30 * 60 * 1000; // every 30 minutes

class DailyWeatherListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.weatherService = new WeatherService(
      new WeatherAPI(new HttpClient()),
      new DataConverter()
    );
  }

  componentDidMount() {
    this.props.getDailyWeatherForecast(this.weatherService);

    this.timerID = setInterval(
      () => this.props.getDailyWeatherForecast(this.weatherService),
      UPDATE_FREQUENCY
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return <DailyWeatherList value={this.props.dailyWeatherList} />;
  }
}

function mapStateToProps(state) {
  return {
    dailyWeatherList: state.updateDailyWeather.dailyWeatherList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getDailyWeatherForecast: weatherService =>
      fetchDailyWeatherForecast(weatherService)(dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DailyWeatherListContainer);
