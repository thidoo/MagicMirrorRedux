class WeatherService {

  constructor(weatherHttpClient, weatherDataConverter){
    this.weatherHttpClient = weatherHttpClient;
    this.weatherDataConverter = weatherDataConverter;
  }

  // getCurrentWeather(){
  //   return this.transformDataToShorterForm(this.weatherHttpClient.makeCurrentWeatherRequest,
  //     this.weatherDataConverter.convertCurrentWeatherData);
  // }

  getCurrentWeather(){
    return this.weatherHttpClient.makeCurrentWeatherRequest()
      .then(response => response.json())
      .then(fullData => this.weatherDataConverter.convertCurrentWeatherData(fullData))
      .then(currentWeatherData => currentWeatherData);
  }

  getDailyWeatherForecast(){
    return this.weatherHttpClient.makeDailyWeatherForecastRequest()
      .then(response => response.json())
      .then(fullData => this.weatherDataConverter.convertDailyWeatherData(fullData.list))
      .then(dailyWeatherData => dailyWeatherData);
  }

  // transformDataToShorterForm(makeAPICall, performDataConversion){
  //   return makeAPICall()
  //     .then(response => response.json())
  //     .then(fullData => function(){performDataConversion(fullData)})
  //     .then(desiredData => desiredData);
  // }
}

export default WeatherService;