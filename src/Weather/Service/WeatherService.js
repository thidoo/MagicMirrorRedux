class WeatherService {
  constructor(weatherAPI, weatherDataConverter) {
    this.weatherAPI = weatherAPI;
    this.weatherDataConverter = weatherDataConverter;
  }

  getCurrentWeather() {
    return this.transformDataToShorterForm(
      this.weatherAPI.makeCurrentWeatherRequest,
      this.weatherDataConverter.convertCurrentWeatherData
    );
  }

  getDailyWeatherForecast() {
    return this.transformDataToShorterForm(
      this.weatherAPI.makeDailyWeatherForecastRequest,
      this.weatherDataConverter.convertDailyWeatherData
    );
  }

  transformDataToShorterForm(makeAPICall, performDataConversion) {
    return makeAPICall()
      .then(fullData => performDataConversion(fullData))
      .then(desiredData => desiredData);
  }
}

export default WeatherService;
