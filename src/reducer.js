import {combineReducers} from 'redux';

import updateCurrentWeather from './Weather/CurrentForecast/reducer';

const rootReducer = combineReducers({
  updateCurrentWeather,
});

export default rootReducer;