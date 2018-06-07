class WeatherAPI {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  makeCurrentWeatherRequest = () => {
    return this.httpClient.makeRequest(
      "http://api.openweathermap.org/data/2.5/weather?q=Melbourne,au?&APPID=4a1fe1f56f0aca5ec03a7ba51fc9aa31"
    );
  };

  makeDailyWeatherForecastRequest = () => {
    return this.httpClient.makeRequest(
      "http://api.openweathermap.org/data/2.5/forecast?q=Melbourne,au?&APPID=4a1fe1f56f0aca5ec03a7ba51fc9aa31"
    );
  };
}

export default WeatherAPI;
