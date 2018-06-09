export const REQUEST_CURRENT_CRYPTO_PRICE = "REQUEST_CURRENT_CRYPTO_PRICE";
export const RECEIVE_CURRENT_CRYPTO_PRICE = "RECEIVE_CURRENT_CRYPTO_PRICE";

function requestCurrentCryptoPrice() {
  return {
    type: REQUEST_CURRENT_CRYPTO_PRICE
  };
}

function receiveCurrentCryptoPrice(currentCryptoPrice) {
  return {
    type: RECEIVE_CURRENT_CRYPTO_PRICE,
    currentCryptoPrice: currentCryptoPrice
  };
}

export function fetchCurrentCryptoData(cryptoService) {
  return dispatch => {
    dispatch(requestCurrentCryptoPrice());

    return cryptoService.getCurrentCryptoPrice().then(currentCryptoPrice => {
      dispatch(receiveCurrentCryptoPrice(currentCryptoPrice));
    });
  };
}
