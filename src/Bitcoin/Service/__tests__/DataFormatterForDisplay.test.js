import DataFormatterForDisplay from "../DataFormatterForDisplay";

describe("#generatePriceForDisplay", () => {
  const dataFormatter = new DataFormatterForDisplay();

  it("should return price of format AUD amount with 2 decimal places", () => {
    const inputPrice = 760.9802988999999;
    const actualResult = dataFormatter.generatePriceForDisplay(inputPrice);
    const expectedResult = 761.0;

    expect(actualResult).toEqual(expectedResult);
  });
});

describe("#generateDateTimeForDisplay", () => {
  const dataFormatter = new DataFormatterForDisplay();

  it("should return dateTime of format dd/mm/yy hh:mm:ss", () => {
    const inputDateTime = new Date();
    const actualResult = dataFormatter.generateDateTimeForDisplay(
      inputDateTime
    );
    const expectedResult = "01/06/2018";

    expect(actualResult).toEqual(expectedResult);
  });
});
