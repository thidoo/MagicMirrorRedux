import React from 'react';
import './BitcoinPrice.css';

class BitcoinPrice extends React.Component {

  render(){
    return (
      <div className="BitcoinPrice">
        <div className="price">1 Bitcoin = ${this.props.value.currentBitcoinPrice} AUD</div>
      </div>
    )
  }
}
export default BitcoinPrice;
