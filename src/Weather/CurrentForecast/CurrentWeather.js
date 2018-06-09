import React from "react";
import Proptypes from "prop-types";
import "./CurrentWeather.css";

class CurrentWeather extends React.Component {
  render() {
    const { location, description, temperature } = this.props.value;
    return (
      <div className="CurrentWeather">
        <div className="location">{location}</div>
        <div className="weatherDescription">{description}</div>
        <div className="temperature">
          {temperature}
          {"\xB0"}
        </div>
      </div>
    );
  }
}

export default CurrentWeather;

CurrentWeather.propTypes = {
  value: Proptypes.shape({
    location: Proptypes.string,
    description: Proptypes.string,
    temperature: Proptypes.number
  })
};
