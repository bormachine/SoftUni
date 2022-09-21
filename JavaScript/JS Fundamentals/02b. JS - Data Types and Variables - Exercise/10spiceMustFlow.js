function spiceMustFlow(startingYield) {
  let spiceExtracted = 0;
  let daysOperational = 0;

  while (startingYield >= 100) {
    daysOperational++;
    spiceExtracted += startingYield - 26;
    startingYield -= 10;
  }

  console.log(daysOperational);
  if (daysOperational != 0) {
    console.log(spiceExtracted - 26);
  } else {
    console.log(spiceExtracted);
  }
}
spiceMustFlow(450);
