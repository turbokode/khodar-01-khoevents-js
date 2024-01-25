export function parseTimeToDate(time) {
  const [hours, minutes] = time.split(':');
  const date = new Date();
  date.setHours(hours);
  date.setMinutes(minutes);

  return date;
}
