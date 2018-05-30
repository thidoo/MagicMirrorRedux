function buildTime(fullDate){
  return String(getTimeInTwoDigits(fullDate.getHours()).concat(":", getTimeInTwoDigits(fullDate.getMinutes()), ":", getTimeInTwoDigits(fullDate.getSeconds())));
}

function getTimeInTwoDigits(number){
  return (number < 10 ? '0' : '') + number;
}

export default buildTime;