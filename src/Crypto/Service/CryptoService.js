class CryptoService {
  constructor(api, dataConverter, dataFormatter) {
    this.api = api;
    this.dataConverter = dataConverter;
    this.dataFormatter = dataFormatter;
  }

  getCurrentCryptoPrice() {
    return this.api
      .makeCryptoPriceRequest()
      .then(response => response.json())
      .then(fullData => this.dataConverter.convert(fullData))
      .then(shortData => this.dataFormatter.format(shortData))
      .then(formattedData => formattedData);
  }
}

export default CryptoService;
