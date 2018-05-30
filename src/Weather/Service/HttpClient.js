import fetch from 'cross-fetch';

class HttpClient {

  makeCurrentWeatherRequest(){
    return fetch('http://api.openweathermap.org/data/2.5/weather?q=Melbourne,au?&APPID=4a1fe1f56f0aca5ec03a7ba51fc9aa31');
  }
}

export default HttpClient;