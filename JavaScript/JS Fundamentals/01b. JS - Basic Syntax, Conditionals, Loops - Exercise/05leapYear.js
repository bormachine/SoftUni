function leapYear(year) {
  isLeap = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0 ? true : false;
  if (isLeap) console.log("yes");
  else console.log("no");
}

leapYear(1984);
leapYear(2003);
leapYear(4);
