class DataConverter {
  convertToBitcoinData(fullData) {
    return {
      bitcoin: {
        price: fullData.RAW.BTC.AUD.PRICE,
        lastUpdated: fullData.RAW.BTC.AUD.LASTUPDATE,
        changeIn24Hours: fullData.RAW.BTC.AUD.CHANGE24HOUR
      },
      ethereum: {
        price: fullData.RAW.ETH.AUD.PRICE,
        lastUpdated: fullData.RAW.ETH.AUD.LASTUPDATE,
        changeIn24Hours: fullData.RAW.ETH.AUD.CHANGE24HOUR
      }
    };
  }
}

export default DataConverter;
