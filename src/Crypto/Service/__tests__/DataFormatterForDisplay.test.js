import DataFormatter from "../DataFormatter";

describe("#generatePriceForDisplay", () => {
  const dataFormatter = new DataFormatter();

  it("should return price of format AUD amount with 2 decimal places", () => {
    const inputPrice = 760.9802988999999;
    const actualResult = dataFormatter.generatePriceForDisplay(inputPrice);
    const expectedResult = 761.0;

    expect(actualResult).toEqual(expectedResult);
  });
});

describe("#generateDateTimeForDisplay", () => {
  const dataFormatter = new DataFormatter();

  it("should return dateTime of format dd/mm/yy hh:mm:ss", () => {
    const inputDateTime = new Date(1527832805);
    const actualResult = dataFormatter.generateDateTimeForDisplay(
      inputDateTime
    );
    const expectedResult = "19/00/1970 02:23:52";

    expect(actualResult).toEqual(expectedResult);
  });
});
