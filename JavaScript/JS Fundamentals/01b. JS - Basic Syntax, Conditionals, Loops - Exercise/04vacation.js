function vacation(number, type, day) {
  let price = 0;
  switch (type) {
    case "Students":
      switch (day) {
        case "Friday":
          price = 8.45;
          break;
        case "Saturday":
          price = 9.8;
          break;
        case "Sunday":
          price = 10.46;
          break;
      }
      break;
    case "Business":
      switch (day) {
        case "Friday":
          price = 10.9;
          break;
        case "Saturday":
          price = 15.6;
          break;
        case "Sunday":
          price = 16;
          break;
      }
      break;
    case "Regular":
      switch (day) {
        case "Friday":
          price = 15;
          break;
        case "Saturday":
          price = 20;
          break;
        case "Sunday":
          price = 22.5;
          break;
      }
      break;
  }

  let multiplier = 1;
  if (number >= 30 && type == "Students") multiplier = 0.85;
  if (number >= 100 && type == "Business") number -= 10;
  if (number >= 10 && number <= 20 && type == "Regular") multiplier = 0.95;

  let totalPrice = price * number * multiplier;
  //console.log(price, number, multiplier);
  console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");
