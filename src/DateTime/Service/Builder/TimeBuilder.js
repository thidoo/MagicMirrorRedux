function buildTime(fullDate) {
  return String(
    generateNumberInTwoDigits(fullDate.getHours()).concat(
      ":",
      generateNumberInTwoDigits(fullDate.getMinutes()),
      ":",
      generateNumberInTwoDigits(fullDate.getSeconds())
    )
  );
}

function generateNumberInTwoDigits(number) {
  return (number < 10 ? "0" : "") + number;
}

export default buildTime;
