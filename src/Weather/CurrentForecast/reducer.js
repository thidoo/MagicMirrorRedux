import {RECEIVE_CURRENT_WEATHER, REQUEST_CURRENT_WEATHER} from "./actions";

const initialState = {
  isFetching: false,
  error: null,
  currentWeather: {},
};

function updateCurrentWeather(state = initialState, action){

  switch (action.type){
    case REQUEST_CURRENT_WEATHER:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case RECEIVE_CURRENT_WEATHER:
      return Object.assign({}, state, {
        isFetching: false,
        currentWeather: action.currentWeather,
      })
    default:
      return state;
  }
}

export default updateCurrentWeather;

