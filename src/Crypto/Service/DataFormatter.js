class DataFormatter {
  format = beforeFormatData => {
    return {
      bitcoin: {
        price: this.generatePriceForDisplay(beforeFormatData.bitcoin.price),
        lastUpdated: this.generateDateTimeForDisplay(
          beforeFormatData.bitcoin.lastUpdated
        ),
        changeIn24Hours: this.generatePriceForDisplay(
          beforeFormatData.bitcoin.changeIn24Hours
        )
      },
      ethereum: {
        price: this.generatePriceForDisplay(beforeFormatData.ethereum.price),
        lastUpdated: this.generateDateTimeForDisplay(
          beforeFormatData.ethereum.lastUpdated
        ),
        changeIn24Hours: this.generatePriceForDisplay(
          beforeFormatData.ethereum.changeIn24Hours
        )
      }
    };
  };

  generatePriceForDisplay = price => {
    return Math.round((price * 100) / 100);
  };

  generateDateTimeForDisplay = dateTime => {
    return (
      this.computeDateStringForDisplay(dateTime) +
      " " +
      this.computeTimeStringForDisplay(dateTime)
    );
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

  computeTimeStringForDisplay = dateTime => {
    return (
      this.generateNumberStringWithTwoDigits(dateTime.getHours()) +
      ":" +
      this.generateNumberStringWithTwoDigits(dateTime.getMinutes()) +
      ":" +
      this.generateNumberStringWithTwoDigits(dateTime.getSeconds())
    );
  };

  generateNumberStringWithTwoDigits = number => {
    return (number < 10 ? "0" : "") + number;
  };
}

export default DataFormatter;
