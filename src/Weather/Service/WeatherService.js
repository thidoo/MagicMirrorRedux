class WeatherService {

  constructor(weatherHttpClient, weatherDataConverter){
    this.weatherHttpClient = weatherHttpClient;
    this.weatherDataConverter = weatherDataConverter;
  }

  getCurrentWeather(){
    return this.weatherHttpClient.makeCurrentWeatherRequest()
      .then(response => response.json())
      .then(fullData => this.weatherDataConverter.convertCurrentWeatherData(fullData))
      .then(currentWeatherData => currentWeatherData);
  }

  getDailyWeatherList(){
    let fullDailyWeatherData = this.weatherHttpClient.fetchDailyWeatherData();
    return this.weatherDataConverter.convertDailyWeatherData(fullDailyWeatherData);
  }

}

export default WeatherService;