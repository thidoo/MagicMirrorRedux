export const UPDATE_CURRENT_DATETIME = 'UPDATE_CURRENT_DATETIME';

export function updateCurrentDateTime(dateTimeService){
  return {
    type: UPDATE_CURRENT_DATETIME,
    currentDateTime: dateTimeService.getCurrentDateTime(),
  }
}