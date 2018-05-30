export const REQUEST_CURRENT_WEATHER = 'REQUEST_CURRENT_WEATHER';
export const RECEIVE_CURRENT_WEATHER = 'RECEIVE_CURRENT_WEATHER';

function requestCurrentWeather(){
  return {
    type: REQUEST_CURRENT_WEATHER
  }
}

function receiveCurrentWeather(currentWeather){
  return {
    type: RECEIVE_CURRENT_WEATHER,
    currentWeather,
  }
}

export function fetchCurrentWeatherData(weatherService){
  return dispatch => {
    dispatch(requestCurrentWeather());

    return weatherService.getCurrentWeather()
      .then(currentWeatherData => dispatch(receiveCurrentWeather(currentWeatherData)));
  }
}
