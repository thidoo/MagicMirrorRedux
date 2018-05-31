import {
  RECEIVE_CURRENT_BITCOIN_PRICE,
  REQUEST_CURRENT_BITCOIN_PRICE,
} from "./actions";

const initialState = {
  isFetching: false,
  error: null,
  currentBitcoinPrice: {},
};

function updateCurrentBitcoinPrice(state = initialState, action){

  switch (action.type){
    case REQUEST_CURRENT_BITCOIN_PRICE:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case RECEIVE_CURRENT_BITCOIN_PRICE:
      console.log("action payload:", action.currentBitcoinPrice);
      return Object.assign({}, state, {
        isFetching: false,
        currentBitcoinPrice: action.currentBitcoinPrice,
      })
    default:
      return state;
  }
}

export default updateCurrentBitcoinPrice;
