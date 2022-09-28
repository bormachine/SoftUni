function dayOfWeek(day) {
  let weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  if (day > 0 && day < 8) {
    console.log(weekdays[day - 1]);
  } else {
    console.log("Invalid day!");
  }
}
dayOfWeek(6);
dayOfWeek(11);
