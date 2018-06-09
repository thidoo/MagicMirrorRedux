import fetch from "cross-fetch";

class QuoteAPI {
  makeQuoteRequest() {
    return fetch("https://talaikis.com/api/quotes/random/");
  }
}

export default QuoteAPI;
