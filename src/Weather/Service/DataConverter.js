import buildDay from '../../DateTime/Service/Builder/DayBuilder';

class DataConverter {

  convertCurrentWeatherData(fullData) {
    return {
      "location": fullData.name,
      "description": (fullData.weather[0]).description,
      "temperature": this.convertFromKelvinToCelcius(fullData.main.temp),
    }
  }

  convertDailyWeatherData(fullData) {
    let dataList = [];
    for (let singleDayData of fullData){
      dataList.push({
        "day": this.computeDay(singleDayData.dt_txt),
        "minTemp": this.convertFromKelvinToCelcius(singleDayData.main.temp_min),
        "maxTemp": this.convertFromKelvinToCelcius(singleDayData.main.temp_max),
        "description": this.capitaliseFirstLetter(singleDayData.weather[0].description),
      });
    }
    return this.condenseDailyWeatherData(dataList);
  }

  // Condense a list of data with repeated days to a list of data with unique days
  condenseDailyWeatherData(repeatedDayData){
    let condensedList = [];

    let maxTemp = Number.NEGATIVE_INFINITY;
    let minTemp = Number.POSITIVE_INFINITY;

    let newDay = repeatedDayData[0];

    for (let singleDay of repeatedDayData){

      if (singleDay.day !== newDay.day){
        condensedList.push(newDay);
        newDay = singleDay;
        maxTemp = singleDay.maxTemp;
        minTemp = singleDay.minTemp;
      }
      else {
        if (singleDay.maxTemp > maxTemp) {
          maxTemp = singleDay.maxTemp;
          newDay.maxTemp = maxTemp;
        }

        if (singleDay.minTemp < minTemp) {
          minTemp = singleDay.minTemp;
          newDay.minTemp = minTemp;
        }
      }
    }

    condensedList.push(newDay);

    return condensedList;
  }

  computeDay(fullDateString){
    let date = new Date(fullDateString);
    return buildDay(date);
  }

  convertFromKelvinToCelcius(temperatureInF){
    return Math.round(temperatureInF - 273.15);
  }

  capitaliseFirstLetter(description){
    return description.charAt(0).toUpperCase() + description.slice(1);
  }
}


export default DataConverter;