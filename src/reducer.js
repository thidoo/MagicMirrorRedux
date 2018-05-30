import {combineReducers} from 'redux';

import updateCurrentWeather from './Weather/CurrentForecast/redux/reducer';
import updateCurrentDateTime from './DateTime/redux/reducer';

const rootReducer = combineReducers({
  updateCurrentWeather,
  updateCurrentDateTime,
});

export default rootReducer;