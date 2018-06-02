import fetch from "cross-fetch";

class BitcoinAPI {
  // makeBitcoinPriceRequest(){
  //   return fetch('https://api.coindesk.com/v1/bpi/currentprice/AUD.json');
  // }

  makeBitcoinPriceRequest() {
    return fetch(
      "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH&tsyms=AUD"
    );
  }
}

export default BitcoinAPI;
