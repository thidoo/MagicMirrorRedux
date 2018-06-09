class DataConverter {
  convert(fullData) {
    const dataRetrievalTime = new Date();
    return {
      bitcoin: {
        price: fullData.RAW.BTC.AUD.PRICE,
        lastUpdated: dataRetrievalTime,
        changeIn24Hours: fullData.RAW.BTC.AUD.CHANGE24HOUR
      },
      ethereum: {
        price: fullData.RAW.ETH.AUD.PRICE,
        lastUpdated: dataRetrievalTime,
        changeIn24Hours: fullData.RAW.ETH.AUD.CHANGE24HOUR
      }
    };
  }
}

export default DataConverter;
