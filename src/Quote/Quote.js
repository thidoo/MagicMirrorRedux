import React from "react";
import Proptypes from "prop-types";

import "./Quote.css";

class Quote extends React.Component {
  render() {
    return (
      <div className="Quote">
        <div className="body">{this.props.quote}</div>
        <div className="author">By: {this.props.author}</div>
      </div>
    );
  }
}

export default Quote;

Quote.proptypes = {
  value: Proptypes.shape({
    quote: Proptypes.string,
    author: Proptypes.string
  })
};
