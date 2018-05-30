class DataConverter {

  convertToBitcoinData(fullData){
    return {
      "rate": fullData.bpi.AUD.rate_float
    }
  }

}

export default DataConverter;