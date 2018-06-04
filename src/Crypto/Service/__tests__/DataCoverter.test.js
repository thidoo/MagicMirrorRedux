import DataConverter from "../DataConverter";
import cryptoPriceTestData from "./testData/cryptoPriceTestData";

describe("#convert", () => {
  const dataConverter = new DataConverter();

  it("should return data with price, lastUpdated, changeIn24Hours", () => {
    const actualResult = dataConverter.convert(cryptoPriceTestData);

    const expectedResult = {
      bitcoin: {
        price: 9922.81,
        lastUpdated: 1527832805,
        changeIn24Hours: -88.55000000000109
      },
      ethereum: {
        price: 760.9802988999999,
        lastUpdated: 1527832805,
        changeIn24Hours: 7.045195099999887
      }
    };

    expect(actualResult).toEqual(expectedResult);
  });
});
