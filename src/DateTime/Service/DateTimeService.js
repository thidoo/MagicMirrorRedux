import buildDay from './Builder/DayBuilder';
import buildDate from './Builder/DateBuilder';
import buildTime from './Builder/TimeBuilder';

class DateTimeService {

  getCurrentDateTime(){
    let currentDateTime = new Date();

    return {
      'day': buildDay(currentDateTime),
      'date': buildDate(currentDateTime),
      'time': buildTime(currentDateTime)
    }
  }
}

export default DateTimeService;