import { RECEIVE_QUOTE, REQUEST_QUOTE } from "./actions";

const initialState = {
  isFetching: false,
  quote: null,
  author: null
};

function updateQuote(state = initialState, action) {
  switch (action.type) {
    case REQUEST_QUOTE:
      return Object.assign({}, state, {
        isFetching: true
      });

    case RECEIVE_QUOTE:
      return Object.assign({}, state, {
        isFetching: false,
        quote: action.quote,
        author: action.author
      });

    default:
      return state;
  }
}

export default updateQuote;
