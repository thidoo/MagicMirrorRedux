import DataConverter from "../DataConverter";
import fullDailyWeatherData from "./testData/dailyWeatherTestData";

describe("#convertCurrentWeatherData", () => {
  const dataConverter = new DataConverter();

  it("should return data with location, temperature, description attributes", () => {
    const fullData = {
      coord: { lon: 144.96, lat: -37.81 },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d"
        }
      ],
      base: "stations",
      main: {
        temp: 287.15,
        pressure: 1029,
        humidity: 50,
        temp_min: 287.15,
        temp_max: 287.15
      },
      visibility: 10000,
      wind: { speed: 7.7, deg: 190 },
      clouds: { all: 32 },
      dt: 1527735600,
      sys: {
        type: 1,
        id: 8193,
        message: 0.009,
        country: "AU",
        sunrise: 1527715539,
        sunset: 1527750585
      },
      id: 2158177,
      name: "Melbourne",
      cod: 200
    };

    const actualResult = dataConverter.convertCurrentWeatherData(fullData);
    const expectedResult = {
      location: "Melbourne",
      description: "scattered clouds",
      temperature: 14
    };

    expect(actualResult).toEqual(expectedResult);
  });
});

describe("#convertDailyWeatherData", () => {
  const dataConverter = new DataConverter();

  it("should return unique daily data", () => {
    const fullData = fullDailyWeatherData;

    const actualResult = dataConverter.convertDailyWeatherData(fullData);
    const expectedResultForFirstDayOfList = {
      day: "Thursday",
      minTemp: 2,
      maxTemp: 14,
      description: "Clear sky"
    };

    expect(actualResult[0]).toEqual(expectedResultForFirstDayOfList);
  });
});
