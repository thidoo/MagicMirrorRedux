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
    return dataList;
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