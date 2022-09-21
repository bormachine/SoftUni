function requiredReading(pageCount, hourlyRate, daysToRead) {
  let bookHours = pageCount / hourlyRate;

  hourPerDay = bookHours / daysToRead;

  console.log(hourPerDay);
}
requiredReading(212, 20, 2);
