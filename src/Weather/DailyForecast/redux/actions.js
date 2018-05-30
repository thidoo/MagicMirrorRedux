export const REQUEST_DAILY_WEATHER = 'REQUEST_DAILY_WEATHER';
export const RECEIVE_DAILY_WEATHER = 'RECEIVE_DAILY_WEATHER';

function requestDailyWeather(){
  return {
    type: REQUEST_DAILY_WEATHER
  }
}

function receiveDailyWeather(dailyWeatherList){
  return {
    type: RECEIVE_DAILY_WEATHER,
    dailyWeatherList,
  }
}

export function fetchDailyWeatherForecast(weatherService){
  return dispatch => {
    dispatch(requestDailyWeather());

    return weatherService.getDailyWeatherForecast()
      .then(dailyWeatherList => dispatch(receiveDailyWeather(dailyWeatherList)));
  }
}
