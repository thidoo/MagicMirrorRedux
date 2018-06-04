import React from "react";
import { Provider } from "react-redux";

import "./AppContainer.css";

import configureStore from "./store";
import WeatherForecastContainer from "./Weather/WeatherForecastContainer";
import CurrentDateTimeContainer from "./DateTime/CurrentDateTimeContainer";
import CryptoPriceContainer from "./Crypto/CryptoPriceContainer";

const store = configureStore();

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="UpperSection">
            <CurrentDateTimeContainer />
            <WeatherForecastContainer />
          </div>

          <div className="LowerSection">
            <CryptoPriceContainer />
          </div>
        </div>
      </Provider>
    );
  }
}

export default AppContainer;
