class WeatherService {
  constructor(weatherHttpClient, weatherDataConverter) {
    this.weatherHttpClient = weatherHttpClient;
    this.weatherDataConverter = weatherDataConverter;
  }

  getCurrentWeather() {
    return this.transformDataToShorterForm(
      this.weatherHttpClient.makeCurrentWeatherRequest,
      this.weatherDataConverter.convertCurrentWeatherData
    );
  }

  getDailyWeatherForecast() {
    return this.transformDataToShorterForm(
      this.weatherHttpClient.makeDailyWeatherForecastRequest,
      this.weatherDataConverter.convertDailyWeatherData
    );
  }

  transformDataToShorterForm(makeAPICall, performDataConversion) {
    return makeAPICall()
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(fullData => performDataConversion(fullData))
      .then(desiredData => desiredData);
  }
}

export default WeatherService;
