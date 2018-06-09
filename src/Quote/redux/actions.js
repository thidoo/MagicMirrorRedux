export const REQUEST_QUOTE = "REQUEST QUOTE";
export const RECEIVE_QUOTE = "RECEIVE QUOTE";

function requestQuote() {
  return {
    type: REQUEST_QUOTE
  };
}

function receiveQuote(quote, author) {
  return {
    type: RECEIVE_QUOTE,
    quote: quote,
    author: author
  };
}

export function fetchQuote(quoteService) {
  return dispatch => {
    dispatch(requestQuote());

    return quoteService
      .fetchQuote()
      .then(response =>
        dispatch(receiveQuote(response.quote, response.author))
      );
  };
}
