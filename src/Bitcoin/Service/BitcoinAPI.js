import fetch from 'cross-fetch';

class BitcoinAPI {
  makeBitcoinPriceRequest(){
    return fetch('https://api.coindesk.com/v1/bpi/currentprice/AUD.json');
  }
}

export default BitcoinAPI;