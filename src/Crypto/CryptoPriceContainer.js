import React from "react";
import { connect } from "react-redux";

import { fetchCurrentCryptoData } from "./redux/actions";
import CryptoAPI from "./Service/CryptoAPI";
import DataConverter from "./Service/DataConverter";
import CryptoService from "./Service/CryptoService";

import CryptoPrice from "./CryptoPrice";
import DataFormatter from "./Service/DataFormatter";

const UPDATE_FREQUENCY = 5 * 60 * 1000; // every 5 minutes

class CryptoPriceContainer extends React.Component {
  constructor(props) {
    super(props);
    this.cryptoService = new CryptoService(
      new CryptoAPI(),
      new DataConverter(),
      new DataFormatter()
    );
  }

  componentDidMount() {
    this.props.getCurrentCryptoPrice(this.cryptoService);

    this.timerID = setInterval(
      () => this.props.getCurrentCryptoPrice(this.cryptoService),
      UPDATE_FREQUENCY
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return this.props.isFetching ? null : (
      <CryptoPrice value={this.props.currentCryptoPrice} />
    );
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.updateCurrentCryptoPrice.isFetching,
    currentCryptoPrice: state.updateCurrentCryptoPrice.currentCryptoPrice
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCurrentCryptoPrice: cryptoService =>
      fetchCurrentCryptoData(cryptoService)(dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CryptoPriceContainer);
