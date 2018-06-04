import { combineReducers } from "redux";

import updateCurrentWeather from "./Weather/CurrentForecast/redux/reducer";
import updateCurrentDateTime from "./DateTime/redux/reducer";
import updateDailyWeather from "./Weather/DailyForecast/redux/reducer";
import updateCurrentCryptoPrice from "./Crypto/redux/reducer";
import updateQuote from "./Quote/redux/reducer";

const rootReducer = combineReducers({
  updateCurrentWeather,
  updateDailyWeather,
  updateCurrentDateTime,
  updateCurrentCryptoPrice,
  updateQuote
});

export default rootReducer;
