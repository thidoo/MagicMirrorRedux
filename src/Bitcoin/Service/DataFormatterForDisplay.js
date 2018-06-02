class DataFormatterForDisplay {
  transform(beforeTransformationData) {
    return {
      bitcoin: {
        price: fullData.RAW.BTC.AUD.PRICE,
        lastUpdated: fullData.RAW.BTC.AUD.LASTUPDATE,
        changeIn24Hours: fullData.RAW.BTC.AUD.CHANGE24HOUR
      },
      ethereum: {
        price: fullData.RAW.ETH.AUD.PRICE,
        lastUpdated: fullData.RAW.ETH.AUD.LASTUPDATE,
        changeIn24Hours: fullData.RAW.ETH.AUD.CHANGE24HOUR
      }
    };
  }

  generatePriceForDisplay = price => {
    return Math.round((price * 100) / 100);
  };

  generateDateTimeForDisplay = dateTime => {
    return this.computeDateStringForDisplay(dateTime);
  };

  computeDateStringForDisplay = dateTime => {
    return (
      this.generateNumberStringWithTwoDigits(dateTime.getDate()) +
      "/" +
      this.generateNumberStringWithTwoDigits(dateTime.getMonth()) +
      "/" +
      this.generateNumberStringWithTwoDigits(dateTime.getFullYear())
    );
  };

  generateNumberStringWithTwoDigits = number => {
    return (number < 10 ? "0" : "") + number;
  };
}

export default DataFormatterForDisplay;
