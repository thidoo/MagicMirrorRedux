import {UPDATE_CURRENT_DATETIME} from "./actions";

const initialState = {
  isFetching: false,
  error: null,
  currentDateTime: {},
}

function updateCurrentDateTime(state = initialState, action){
  switch (action.type){
    case UPDATE_CURRENT_DATETIME:
      return Object.assign({}, state, {
        isFetching: false,
        currentDateTime: action.currentDateTime,
      })
    default:
      return state;
  }
}

export default updateCurrentDateTime;