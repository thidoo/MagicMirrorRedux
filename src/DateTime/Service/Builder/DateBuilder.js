function buildDate(fullDate){
  return String(fullDate.getDate()).concat(" ", getMonthInWord(fullDate.getMonth()), " ", fullDate.getFullYear());
}

function getMonthInWord(monthId){
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return months[monthId];
}

export default buildDate;