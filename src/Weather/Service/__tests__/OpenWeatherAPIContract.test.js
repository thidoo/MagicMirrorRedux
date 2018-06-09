import { fetch } from "cross-fetch";
let Ajv = require("ajv");
let ajv = new Ajv();
import currentWeatherJsonSchema from "./jsonSchema/currentWeatherJsonSchema";
import dailyWeatherJsonSchema from "./jsonSchema/dailyWeatherJsonSchema";

describe("#currentWeatherData", () => {
  it("fetch current weather data", () => {
    const url =
      "http://api.openweathermap.org/data/2.5/weather?q=Melbourne,au?&APPID=4a1fe1f56f0aca5ec03a7ba51fc9aa31";
    fetch(url)
      .then(response => response.json())
      .then(json => {
        let schema = currentWeatherJsonSchema;
        let validate = ajv.compile(schema);

        expect(validate(json)).toBe(true);
      });
  });
});

describe("#dailyWeatherData", () => {
  it("fetch daily weather data", () => {
    const url =
      "http://api.openweathermap.org/data/2.5/forecast?q=Melbourne,au?&APPID=4a1fe1f56f0aca5ec03a7ba51fc9aa31";
    fetch(url)
      .then(response => response.json())
      .then(json => {
        let schema = dailyWeatherJsonSchema;
        let validate = ajv.compile(schema);

        expect(validate(json)).toBe(true);
      });
  });
});
