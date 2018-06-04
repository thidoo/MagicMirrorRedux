import React from "react";
import { connect } from "react-redux";

import { fetchQuote } from "./redux/actions";
import QuoteService from "./Service/QuoteService";
import QuoteAPI from "./Service/QuoteAPI";
import DataConverter from "./Service/DataConverter";

import Quote from "./Quote";

class QuoteContainer extends React.Component {
  UPDATE_FREQUENCY = 6 * 60 * 60 * 1000; // every 6 hours

  constructor(props) {
    super(props);
    this.quoteService = new QuoteService(new QuoteAPI(), new DataConverter());
  }

  componentDidMount() {
    this.props.fetchQuote(this.quoteService);

    this.timerID = setInterval(
      () => this.props.fetchQuote(this.quoteService),
      this.UPDATE_FREQUENCY
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return this.props.isFetching ? null : (
      <Quote quote={this.props.quote} author={this.props.author} />
    );
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.updateQuote.isFetching,
    quote: state.updateQuote.quote,
    author: state.updateQuote.author
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchQuote: quoteService => fetchQuote(quoteService)(dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuoteContainer);
