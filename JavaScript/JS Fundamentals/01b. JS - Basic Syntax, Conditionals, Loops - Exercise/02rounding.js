function rounding(number, to) {
  if (to >= 15) to = 15;
  console.log(parseFloat(number.toFixed(to)));
}

rounding(3.1415926535897932384626433832795, 2);
