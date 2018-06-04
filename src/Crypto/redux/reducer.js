import {
  RECEIVE_CURRENT_CRYPTO_PRICE,
  REQUEST_CURRENT_CRYPTO_PRICE
} from "./actions";

const initialState = {
  isFetching: true,
  error: null,
  currentCryptoPrice: {}
};

function updateCurrentCryptoPrice(state = initialState, action) {
  switch (action.type) {
    case REQUEST_CURRENT_CRYPTO_PRICE:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_CURRENT_CRYPTO_PRICE:
      return Object.assign({}, state, {
        isFetching: false,
        currentCryptoPrice: action.currentCryptoPrice
      });
    default:
      return state;
  }
}

export default updateCurrentCryptoPrice;
