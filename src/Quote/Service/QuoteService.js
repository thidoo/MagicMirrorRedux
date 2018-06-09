class QuoteService {
  constructor(api, dataConverter) {
    this.api = api;
    this.dataConverter = dataConverter;
  }

  fetchQuote() {
    return this.api
      .makeQuoteRequest()
      .then(response => response.json())
      .then(fullData => this.dataConverter.convert(fullData))
      .then(shortData => shortData);
  }
}

export default QuoteService;
