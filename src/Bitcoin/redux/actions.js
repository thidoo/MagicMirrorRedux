export const REQUEST_CURRENT_BITCOIN_PRICE = "REQUEST_CURRENT_BITCOIN_PRICE";
export const RECEIVE_CURRENT_BITCOIN_PRICE = "RECEIVE_CURRENT_BITCOIN_PRICE";

function requestCurrentBitcoinPrice() {
  return {
    type: REQUEST_CURRENT_BITCOIN_PRICE
  };
}

function receiveCurrentBitcoinPrice(currentBitcoinPrice, updateTime) {
  return {
    type: RECEIVE_CURRENT_BITCOIN_PRICE,
    currentBitcoinPrice
  };
}

export function fetchCurrentBitcoinData(bitcoinService) {
  return dispatch => {
    dispatch(requestCurrentBitcoinPrice());

    return bitcoinService
      .getCurrentBitcoinPrice()
      .then(currentBitcoinPrice =>
        dispatch(receiveCurrentBitcoinPrice(currentBitcoinPrice))
      );
  };
}
