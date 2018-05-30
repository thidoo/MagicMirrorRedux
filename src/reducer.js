import {combineReducers} from 'redux';

import updateCurrentWeather from './Weather/CurrentForecast/redux/reducer';
import updateCurrentDateTime from './DateTime/redux/reducer';
import updateDailyWeather from './Weather/DailyForecast/redux/reducer';

const rootReducer = combineReducers({
  updateCurrentWeather,
  updateDailyWeather,
  updateCurrentDateTime,
});

export default rootReducer;