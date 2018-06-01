import WeatherService from "../WeatherService";
import WeatherAPI from "../WeatherAPI";
import DataConverter from "../DataConverter";

describe("shouldReturnTransformedCurrentData", () => {
  const weatherService = new WeatherService(
    new WeatherAPI(),
    new DataConverter()
  );
});
