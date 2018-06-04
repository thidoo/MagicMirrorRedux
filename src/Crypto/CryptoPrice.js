import React from "react";
import "./CryptoPrice.css";

class CryptoPrice extends React.Component {
  render() {
    return (
      <div className="CryptoPrice">
        <div className="CryptoPriceItem">
          <div className="price">
            1 Bitcoin = $ {this.props.value.bitcoin.price} AUD
          </div>
          <div className="otherInfo">
            <div className="infoLabels">
              <div>Last Updated:</div>
              <div>Change in 24 Hours:</div>
            </div>
            <div className="values">
              <div>{this.props.value.bitcoin.lastUpdated}</div>
              <div>$ {this.props.value.bitcoin.changeIn24Hours} AUD</div>
            </div>
          </div>
        </div>

        <div className="CryptoPriceItem">
          <div className="price">
            1 Ethereum = $ {this.props.value.ethereum.price} AUD
          </div>
          <div className="otherInfo">
            <div className="infoLabels">
              <div>Last Updated:</div>
              <div>Change in 24 Hours:</div>
            </div>
            <div className="values">
              <div>{this.props.value.ethereum.lastUpdated}</div>
              <div>$ {this.props.value.ethereum.changeIn24Hours} AUD</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CryptoPrice;
