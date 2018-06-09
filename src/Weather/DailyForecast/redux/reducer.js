import { REQUEST_DAILY_WEATHER, RECEIVE_DAILY_WEATHER } from "./actions";

const initialState = {
  isFetching: false,
  error: null,
  dailyWeatherList: []
};

function updateDailyWeather(state = initialState, action) {
  switch (action.type) {
    case REQUEST_DAILY_WEATHER:
      return Object.assign({}, state, {
        isFetching: true
      });

    case RECEIVE_DAILY_WEATHER:
      return Object.assign({}, state, {
        isFetching: false,
        dailyWeatherList: action.dailyWeatherList
      });

    default:
      return state;
  }
}

export default updateDailyWeather;
