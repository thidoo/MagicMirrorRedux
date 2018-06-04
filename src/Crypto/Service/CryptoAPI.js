import fetch from "cross-fetch";

class CryptoAPI {
  // makeCryptoPriceRequest(){
  //   return fetch('https://api.coindesk.com/v1/bpi/currentprice/AUD.json');
  // }

  makeCryptoPriceRequest = () => {
    return fetch(
      "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH&tsyms=AUD"
    );
  };
}

export default CryptoAPI;
