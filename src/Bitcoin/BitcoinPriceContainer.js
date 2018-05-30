import React from 'react';
import { connect } from 'react-redux';

import {fetchCurrentBitcoinData} from "./redux/actions";
import BitcoinAPI from "./Service/BitcoinAPI";
import DataConverter from "./Service/DataConverter";
import BitcoinService from "./Service/BitcoinService";

import BitcoinPrice from "./BitcoinPrice";

const UPDATE_FREQUENCY = 60*1000; // every minute

class BitcoinPriceContainer extends React.Component{

  constructor(props) {
    super(props);
    this.bitcoinService = new BitcoinService(new BitcoinAPI(), new DataConverter());
  }

  componentDidMount(){
    this.props.getCurrentBitcoinPrice(this.bitcoinService);

    this.timerID = setInterval(
      () => this.props.getCurrentBitcoinPrice(this.bitcoinService),
      UPDATE_FREQUENCY
    );
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  render() {
    return <BitcoinPrice value={this.props.currentBitcoinPrice}/>
  }
}

function mapStateToProps(state) {
  return {
    currentBitcoinPrice: state.updateCurrentBitcoinPrice.currentBitcoinPrice
  }
}

function mapDispatchToProps(dispatch){
  return {
    getCurrentBitcoinPrice: (bitcoinService) => fetchCurrentBitcoinData(bitcoinService)(dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BitcoinPriceContainer);