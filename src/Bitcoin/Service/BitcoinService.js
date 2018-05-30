class BitcoinService{

  constructor(api, dataConverter){
    this.api = api;
    this.dataConverter = dataConverter;
  }

  getCurrentBitcoinPrice(){
    return this.api.makeBitcoinPriceRequest()
      .then(response => response.json())
      .then(fullData => this.dataConverter.convertToBitcoinData(fullData))
      .then(bitcoinPrice => bitcoinPrice);
  }
}

export default BitcoinService;