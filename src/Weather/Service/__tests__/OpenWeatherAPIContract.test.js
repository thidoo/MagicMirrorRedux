import { fetch } from "cross-fetch";
import currentWeatherTestData from "./testData/currentWeatherTestData.json";

describe("#currentWeatherData", () => {
  it("fetch current weather data", () => {
    const url =
      "http://api.openweathermap.org/data/2.5/weather?q=Melbourne,au?&APPID=4a1fe1f56f0aca5ec03a7ba51fc9aa31";
    fetch(url)
      .then(response => response.json())
      .then(json => expect(json).toBeInstanceOf(currentWeatherTestData));
  });
});
